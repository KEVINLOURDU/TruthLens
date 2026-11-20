# TruthLens — Fake News Detection System

A web application that uses **5 Machine Learning models** to detect whether a news article is real or fake.  
Built with Python, Flask, and Scikit-Learn. Deployed live on Vercel.

🌐 **Live Site:** [https://truthlens-delta-one.vercel.app](https://truthlens-delta-one.vercel.app)

---

## What It Does

You paste any news article into the site, and TruthLens runs it through 5 different ML classifiers. Each model gives its own verdict, and a final **majority vote** decides if the news is **Real ✅** or **Fake ❌**.

---

## Pages

| Page | What It Shows |
|------|--------------|
| **Home** | Overview and stats about the system |
| **Detection** | Paste an article and get the AI verdict |
| **Dataset Info** | Info about the training data used |
| **Model Performance** | Accuracy, F1-score, confusion matrix for each model |
| **About** | Project background |
| **Contact** | Contact form |

---

## The 5 ML Models

| Model | Accuracy |
|-------|----------|
| Random Forest | 99.47% |
| Decision Tree | 99.27% |
| Linear SVM | 99.17% |
| Logistic Regression | 98.37% |
| Multinomial Naive Bayes | 94.77% |

All models were trained on the [Fake and Real News Dataset](https://huggingface.co/datasets/genesisqu/fake-real-news) (15,000 samples, balanced).  
Text is converted to numbers using **TF-IDF Vectorization** before being fed into the models.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3, Flask |
| ML Models | Scikit-Learn (joblib for saving/loading) |
| Frontend | HTML, CSS, Vanilla JavaScript |
| Charts | Chart.js |
| Multilingual UI | Custom i18n (English, Tamil, Hindi, Telugu, Kannada) |
| Hosting | Vercel |

---

## Project Structure

```
TruthLens/
│
├── app.py                  # Main Flask app — all routes and logic
│
├── templates/              # HTML pages (Jinja2 templates)
│   ├── base.html           # Shared layout (navbar, footer)
│   ├── index.html          # Home page
│   ├── detection.html      # News detection page
│   ├── dataset.html        # Dataset info page
│   ├── performance.html    # Model performance dashboard
│   ├── about.html          # About page
│   └── contact.html        # Contact page
│
├── static/
│   ├── css/style.css       # All styling
│   └── js/script.js        # i18n translations + UI helpers
│
├── models/
│   └── trained_models/     # Pre-trained .joblib model files
│       ├── vectorizer.joblib
│       ├── random_forest.joblib
│       ├── decision_tree.joblib
│       ├── linear_svm.joblib
│       ├── logistic_regression.joblib
│       ├── naive_bayes.joblib
│       ├── metrics.json
│       └── dataset_stats.json
│
├── requirements.txt        # Python dependencies
├── .gitignore
└── README.md
```

---

## Run Locally

**Step 1 — Clone the repo**
```bash
git clone https://github.com/KEVINLOURDU/TruthLens.git
cd TruthLens
```

**Step 2 — Install dependencies**
```bash
pip install -r requirements.txt
```

**Step 3 — Start the app**
```bash
python app.py
```

**Step 4 — Open in browser**
```
http://localhost:5000
```

> No need to train models — the pre-trained `.joblib` files are already included.

---

## How the Detection Works

```
User inputs article text
        ↓
TF-IDF Vectorizer converts text → numbers
        ↓
All 5 models make a prediction (Real / Fake)
        ↓
Majority vote decides the final verdict
        ↓
Result shown with confidence scores for each model
```

---

## Multilingual Support

The UI supports 5 languages — switch using the dropdown in the top-right corner:

- 🇬🇧 English
- 🇮🇳 Tamil (தமிழ்)
- 🇮🇳 Hindi (हिन्दी)
- 🇮🇳 Telugu (తెలుగు)
- 🇮🇳 Kannada (ಕನ್ನಡ)

---

## Deployment (Vercel)

This project is deployed on Vercel using zero-config Flask detection.  
No `vercel.json` needed — Vercel auto-detects Python/Flask.

To redeploy after changes:
```bash
npx vercel --prod
```

---

## Dataset

- **Source:** [Fake and Real News Dataset on HuggingFace](https://huggingface.co/datasets/genesisqu/fake-real-news)
- **Files:** `Fake.csv` (fake news) + `True.csv` (real news)
- **Training sample:** 15,000 articles (balanced — 50% fake, 50% real)
- **Note:** The raw dataset files are NOT included in this repo (too large). Only the trained model files are committed.

---

## License

MIT License — free to use, modify, and share.

---

## Author

Made by **Kevin Lourdu**  
🌐 Live: [https://truthlens-delta-one.vercel.app](https://truthlens-delta-one.vercel.app)
