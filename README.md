# TruthLens

## Multilingual Fake News Detection Using Machine Learning

**TruthLens** is a Flask‑based web application that detects whether a news article is **FAKE** or **REAL** using five different machine‑learning models. Users can paste article text and a headline, receive predictions from each model, see a majority‑vote result, explore dataset statistics, view model performance charts, and switch the interface between English, Tamil, Hindi, Telugu, and Kannada.

### Features
- End‑to‑end pipeline: data loading → preprocessing → TF‑IDF → model training → prediction.
- Five algorithms: Logistic Regression, Multinomial Naïve Bayes, Decision Tree, Random Forest, Linear SVM.
- Persisted models with **joblib** to avoid retraining on every start.
- Interactive dashboard with accuracy, precision, recall, F1‑score and confusion matrices.
- Multilingual UI (static translations; model works on English text only).
- Responsive, modern dark‑navy UI with charts powered by Chart.js.

### Project Structure
```
TruthLens/
├─ app.py                 # Flask application
├─ requirements.txt       # Python dependencies
├─ README.md              # Project documentation (this file)
├─ data/                  # Place `Fake.csv` and `True.csv` here
├─ models/
│   └─ trained_models/   # Saved model files (joblib)
├─ templates/
│   ├─ base.html
│   ├─ index.html          # Home page
│   ├─ detection.html     # Fake news detection UI
│   ├─ dataset.html        # Dataset statistics
│   ├─ performance.html    # Model performance dashboard
│   └─ about.html          # About the project
└─ static/
    ├─ css/
    │   └─ style.css
    ├─ js/
    │   └─ script.js
    └─ images/            # Logo and icons (add your own)
```

### Quick Start
1. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
2. **Download the dataset** from Kaggle and place `Fake.csv` and `True.csv` inside the `data/` folder.
3. **Run the app**
   ```bash
   python app.py
   ```
   The site will be available at `http://127.0.0.1:5000/`.
4. **Train the models** (first run) by clicking **“Train Models”** on the *Model Training* page.
5. Explore the other sections via the navigation bar.

### Notes
- The models are trained on the provided English dataset; multilingual UI only translates the interface, not the classification model.
- Ensure you have an active internet connection the first time you run `pip install`.
- For any missing dataset files, the app will display a clear error message with instructions.
- The site is designed to be mobile‑friendly and suitable for a final‑year college project.

---
*Created by the Antigravity AI assistant.*

## Multilingual Fake News Detection Using Machine Learning

**TruthLens** is a Flask-based web application that detects whether a news article is **FAKE** or **REAL** using five different machine‑learning models. Users can paste article text and a headline, receive predictions from each model, see a majority‑vote result, explore dataset statistics, view model performance charts, and switch the interface between English, Tamil, Hindi, Telugu, and Kannada.

### Features
- End‑to‑end pipeline: data loading → preprocessing → TF‑IDF → model training → prediction.
- Five algorithms: Logistic Regression, Multinomial Naïve Bayes, Decision Tree, Random Forest, Linear SVM.
- Persisted models with **joblib** to avoid retraining on every start.
- Interactive dashboard with accuracy, precision, recall, F1‑score and confusion matrices.
- Multilingual UI (static translations; model itself works on English text only).
- Responsive, modern dark‑navy UI with charts powered by Chart.js.

### Project Structure
```
TruthLens/
├─ app.py                 # Flask application
├─ requirements.txt       # Python dependencies
├─ README.md              # Project documentation (this file)
├─ data/                  # Place `Fake.csv` and `True.csv` here
├─ models/
│   └─ trained_models/   # Saved model files (joblib)
├─ templates/
│   ├─ base.html
│   ├─ index.html          # Home page
│   ├─ detection.html      # Fake news detection UI
│   ├─ dataset.html        # Dataset statistics
│   ├─ performance.html    # Model performance dashboard
│   └─ about.html         # About the project
└─ static/
    ├─ css/
    │   └─ style.css
    ├─ js/
    │   └─ script.js
    └─ images/            # Logo and icons (add your own)
```

### Quick Start
1. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
2. **Download the dataset** from Kaggle and place `Fake.csv` and `True.csv` inside the `data/` folder.
3. **Run the app**
   ```bash
   python app.py
   ```
   The site will be available at `http://127.0.0.1:5000/`.
4. **Train the models** (first run) by clicking **“Train Models”** on the *Model Training* page.
5. Explore the other sections via the navigation bar.

### Notes
- The models are trained on the provided English dataset; multilingual UI only translates the interface, not the classification model.
- Ensure you have an active internet connection the first time you run `pip install`.
- For any missing dataset files, the app will display a clear error message with instructions.

---
*Created by the Antigravity AI assistant.*