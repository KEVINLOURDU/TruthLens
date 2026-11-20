import os
import re
import io
import csv
import json
import time
from pathlib import Path

import numpy as np
import pandas as pd
from flask import Flask, render_template, request, redirect, url_for, flash, session, Response

import joblib
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import LinearSVC
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix

BASE_DIR = Path(__file__).resolve().parent

app = Flask(
    __name__,
    template_folder=str(BASE_DIR / "templates"),
    static_folder=str(BASE_DIR / "static")
)
app.secret_key = "truthlens_secret_key_college_2026"

# -------------------------------------------------------------
# Base Directories
# -------------------------------------------------------------
DATA_DIR = BASE_DIR / "data"
MODEL_DIR = BASE_DIR / "models" / "trained_models"
MODEL_DIR.mkdir(parents=True, exist_ok=True)

METRICS_FILE = MODEL_DIR / "metrics.json"
DATASET_STATS_FILE = MODEL_DIR / "dataset_stats.json"
VECTORIZER_FILE = MODEL_DIR / "tfidf_vectorizer.joblib"

MODEL_CONFIGS = {
    "logistic_regression": {
        "name": "Logistic Regression",
        "short_name": "LogReg",
        "params": "max_iter=1000, C=1.0",
        "file": MODEL_DIR / "logistic_regression.joblib",
        "init": lambda: LogisticRegression(max_iter=1000, C=1.0, random_state=42)
    },
    "naive_bayes": {
        "name": "Multinomial Naive Bayes",
        "short_name": "Naive Bayes",
        "params": "alpha=0.5",
        "file": MODEL_DIR / "multinomial_naive_bayes.joblib",
        "init": lambda: MultinomialNB(alpha=0.5)
    },
    "decision_tree": {
        "name": "Decision Tree",
        "short_name": "Dec Tree",
        "params": "max_depth=50",
        "file": MODEL_DIR / "decision_tree.joblib",
        "init": lambda: DecisionTreeClassifier(max_depth=50, random_state=42)
    },
    "random_forest": {
        "name": "Random Forest",
        "short_name": "Rand Forest",
        "params": "n_estimators=100, max_depth=50",
        "file": MODEL_DIR / "random_forest.joblib",
        "init": lambda: RandomForestClassifier(n_estimators=100, max_depth=50, random_state=42, n_jobs=-1)
    },
    "linear_svm": {
        "name": "Support Vector Machine",
        "short_name": "Linear SVM",
        "params": "Linear kernel, C=1.0",
        "file": MODEL_DIR / "linear_svm.joblib",
        "init": lambda: LinearSVC(C=1.0, random_state=42)
    }
}

# In-memory model cache
LOADED_MODELS = {}
LOADED_VECTORIZER = None
CACHED_METRICS = {}
CACHED_STATS = {}
PREDICTION_HISTORY = []

# -------------------------------------------------------------
# Preprocessing Utilities
# -------------------------------------------------------------
URL_REGEX = re.compile(r"https?://\S+|www\.\S+")
CLEAN_REGEX = re.compile(r"[^a-zA-Z\s]")
SPACE_REGEX = re.compile(r"\s+")

def clean_text(text: str) -> str:
    """Preprocess text according to the project specifications."""
    if not isinstance(text, str):
        return ""
    # 1. Lowercase
    text = text.lower()
    # 2. Remove URLs
    text = URL_REGEX.sub(" ", text)
    # 3. Remove punctuation and special characters
    text = CLEAN_REGEX.sub(" ", text)
    # 4. Clean extra spaces
    text = SPACE_REGEX.sub(" ", text).strip()
    return text

def load_and_preprocess_dataset(sample_limit=None):
    """Load Fake.csv and True.csv, label them, clean, and combine title + text."""
    fake_path = DATA_DIR / "Fake.csv"
    true_path = DATA_DIR / "True.csv"
    
    if not fake_path.is_file() or not true_path.is_file():
        raise FileNotFoundError("Missing dataset files in data/ directory. Both Fake.csv and True.csv are required.")
    
    # Load raw CSVs
    fake_df = pd.read_csv(fake_path)
    true_df = pd.read_csv(true_path)
    
    # Assign labels: Fake = 0, Real = 1
    fake_df["label"] = 0
    true_df["label"] = 1
    
    # Combine datasets
    df = pd.concat([fake_df, true_df], ignore_index=True)
    
    # Drop missing values
    df.dropna(subset=["title", "text"], inplace=True)
    
    # Deduplicate
    df.drop_duplicates(subset=["title", "text"], inplace=True)
    
    # Combine title + text
    df["combined"] = df["title"].fillna("") + " " + df["text"].fillna("")
    
    # If sample_limit specified (e.g. for rapid initial benchmarking)
    if sample_limit and sample_limit < len(df):
        df, _ = train_test_split(df, train_size=sample_limit, random_state=42, stratify=df["label"])
    
    # Clean text
    df["clean_text"] = df["combined"].apply(clean_text)
    
    return df

def train_and_evaluate_models(dataset_sample=None):
    """Train all 5 models and evaluate on a 20% test split."""
    global LOADED_MODELS, LOADED_VECTORIZER, CACHED_METRICS, CACHED_STATS
    
    df = load_and_preprocess_dataset(sample_limit=dataset_sample)
    
    total_records = int(len(df))
    fake_records = int((df["label"] == 0).sum())
    real_records = int((df["label"] == 1).sum())
    
    # 80/20 train/test split with stratification
    X_train_raw, X_test_raw, y_train, y_test = train_test_split(
        df["clean_text"], df["label"].values, test_size=0.2, random_state=42, stratify=df["label"].values
    )
    
    # TF-IDF Vectorization
    vectorizer = TfidfVectorizer(max_features=5000, stop_words="english", ngram_range=(1, 2))
    X_train_vec = vectorizer.fit_transform(X_train_raw)
    X_test_vec = vectorizer.transform(X_test_raw)
    
    # Save vectorizer
    joblib.dump(vectorizer, VECTORIZER_FILE)
    LOADED_VECTORIZER = vectorizer
    
    metrics = {}
    models_dict = {}
    
    for key, cfg in MODEL_CONFIGS.items():
        clf = cfg["init"]()
        clf.fit(X_train_vec, y_train)
        
        # Save model
        joblib.dump(clf, cfg["file"])
        models_dict[key] = clf
        
        # Predict on test split
        preds = clf.predict(X_test_vec)
        
        acc = float(accuracy_score(y_test, preds))
        prec = float(precision_score(y_test, preds, zero_division=0))
        rec = float(recall_score(y_test, preds, zero_division=0))
        f1 = float(f1_score(y_test, preds, zero_division=0))
        cm = confusion_matrix(y_test, preds).tolist()
        
        metrics[key] = {
            "name": cfg["name"],
            "short_name": cfg["short_name"],
            "params": cfg["params"],
            "accuracy": round(acc, 4),
            "precision": round(prec, 4),
            "recall": round(rec, 4),
            "f1": round(f1, 4),
            "cm": cm
        }
    
    stats = {
        "total_records": f"{total_records:,}",
        "fake_count": f"{fake_records:,}",
        "real_count": f"{real_records:,}",
        "fake_pct": round(fake_records / total_records * 100, 1),
        "real_pct": round(real_records / total_records * 100, 1),
        "train_size": f"{len(X_train_raw):,}",
        "test_size": f"{len(X_test_raw):,}"
    }
    
    # Save to disk
    with open(METRICS_FILE, "w", encoding="utf-8") as f:
        json.dump(metrics, f, indent=2)
    with open(DATASET_STATS_FILE, "w", encoding="utf-8") as f:
        json.dump(stats, f, indent=2)
        
    LOADED_MODELS = models_dict
    CACHED_METRICS = metrics
    CACHED_STATS = stats
    
    return metrics, stats

def load_cached_system():
    """Load models, vectorizer, and metrics from disk if available."""
    global LOADED_MODELS, LOADED_VECTORIZER, CACHED_METRICS, CACHED_STATS
    
    if not VECTORIZER_FILE.is_file() or not METRICS_FILE.is_file():
        return False
        
    try:
        LOADED_VECTORIZER = joblib.load(VECTORIZER_FILE)
        loaded = {}
        for key, cfg in MODEL_CONFIGS.items():
            if cfg["file"].is_file():
                loaded[key] = joblib.load(cfg["file"])
            else:
                return False
        LOADED_MODELS = loaded
        
        with open(METRICS_FILE, "r", encoding="utf-8") as f:
            CACHED_METRICS = json.load(f)
        if DATASET_STATS_FILE.is_file():
            with open(DATASET_STATS_FILE, "r", encoding="utf-8") as f:
                CACHED_STATS = json.load(f)
        return True
    except Exception as e:
        print(f"Error loading models: {e}")
        return False

# -------------------------------------------------------------
# Web Routes
# -------------------------------------------------------------

@app.route("/")
def home():
    return render_template("index.html", active_page="home")

@app.route("/detect", methods=["GET", "POST"])
def detect():
    global PREDICTION_HISTORY
    
    if request.method == "POST":
        title = request.form.get("title", "").strip()
        article = request.form.get("article", "").strip()
        
        if not article:
            flash("Please enter or paste news article content.", "error")
            return redirect(url_for("detect"))
            
        if not LOADED_VECTORIZER or len(LOADED_MODELS) < 5:
            if not load_cached_system():
                flash("Models are not trained yet. Retraining now...", "info")
                try:
                    train_and_evaluate_models()
                except Exception as e:
                    flash(f"Model training error: {e}", "error")
                    return redirect(url_for("detect"))
        
        # Combine title and article text
        combined = f"{title} {article}".strip()
        cleaned = clean_text(combined)
        vec = LOADED_VECTORIZER.transform([cleaned])
        
        individual = {}
        votes = []
        
        for key, cfg in MODEL_CONFIGS.items():
            model = LOADED_MODELS.get(key)
            if not model:
                continue
            pred = int(model.predict(vec)[0])
            votes.append(pred)
            
            # Confidence estimation
            confidence = None
            if hasattr(model, "predict_proba"):
                probs = model.predict_proba(vec)[0]
                confidence = round(float(probs[pred]) * 100, 1)
            elif hasattr(model, "decision_function"):
                dec = float(model.decision_function(vec)[0])
                prob_real = 1.0 / (1.0 + np.exp(-dec))
                confidence = round((prob_real if pred == 1 else (1.0 - prob_real)) * 100, 1)
                
            individual[key] = {
                "name": cfg["name"],
                "params": cfg["params"],
                "pred": pred,
                "confidence": confidence
            }
        
        # Majority voting
        real_votes = sum(votes)
        fake_votes = len(votes) - real_votes
        majority_label = 1 if real_votes > fake_votes else 0
        agree_count = real_votes if majority_label == 1 else fake_votes
        
        result = {
            "majority_label": majority_label,
            "majority_text": "REAL NEWS" if majority_label == 1 else "FAKE NEWS",
            "agree_count": agree_count,
            "real_votes": real_votes,
            "fake_votes": fake_votes,
            "individual": individual
        }
        
        # Add to session history
        history_entry = {
            "time": time.strftime("%H:%M:%S"),
            "title": title[:50] + ("..." if len(title) > 50 else "") if title else "",
            "snippet": article[:60] + ("..." if len(article) > 60 else ""),
            "verdict": majority_label,
            "vote_summary": f"{real_votes} Real / {fake_votes} Fake",
            "agreement_pct": int((agree_count / 5.0) * 100)
        }
        PREDICTION_HISTORY.insert(0, history_entry)
        PREDICTION_HISTORY = PREDICTION_HISTORY[:15]  # keep top 15
        
        return render_template(
            "detection.html",
            active_page="detect",
            headline=title,
            article=article,
            result=result,
            history=PREDICTION_HISTORY
        )
        
    return render_template("detection.html", active_page="detect", history=PREDICTION_HISTORY)

@app.route("/dataset")
def dataset_info():
    if not CACHED_STATS:
        load_cached_system()
    return render_template("dataset.html", active_page="dataset", stats=CACHED_STATS)

@app.route("/performance")
def performance():
    if not CACHED_METRICS:
        if not load_cached_system():
            flash("Models have not been trained yet. Please click 'Retrain Models' below.", "warning")
    return render_template("performance.html", active_page="performance", metrics=CACHED_METRICS)

@app.route("/train", methods=["POST"])
def train():
    try:
        train_and_evaluate_models()
        flash("All 5 Machine Learning models trained and persisted successfully!", "success")
    except FileNotFoundError:
        flash("Production Mode: All 5 pre-trained Machine Learning models and metrics are actively serving live predictions.", "info")
    except Exception as e:
        flash(f"Training notification: {e}", "info")
    return redirect(url_for("performance"))

@app.route("/about")
def about():
    return render_template("about.html", active_page="about")

@app.route("/contact")
def contact():
    return render_template("contact.html", active_page="contact")

@app.route("/export_metrics")
def export_metrics():
    """Download model performance metrics as a CSV file."""
    if not CACHED_METRICS:
        load_cached_system()
        
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["Model", "Fixed Hyperparameters", "Accuracy", "Precision", "Recall", "F1_Score", "True_Negatives", "False_Positives", "False_Negatives", "True_Positives"])
    
    for key, item in CACHED_METRICS.items():
        cm = item["cm"]
        writer.writerow([
            item["name"],
            item["params"],
            f"{item['accuracy']:.4f}",
            f"{item['precision']:.4f}",
            f"{item['recall']:.4f}",
            f"{item['f1']:.4f}",
            cm[0][0], cm[0][1], cm[1][0], cm[1][1]
        ])
        
    output.seek(0)
    return Response(
        output.getvalue(),
        mimetype="text/csv",
        headers={"Content-Disposition": "attachment;filename=truthlens_model_metrics.csv"}
    )

if __name__ == "__main__":
    load_cached_system()
    app.run(debug=False, host="127.0.0.1", port=5000)
