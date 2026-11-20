<div align="center">

  <img src="https://socialify.git.ci/KEVINLOURDU/TruthLens/image?description=1&font=Raleway&language=1&name=1&owner=1&pattern=Plus%20%20%20Arrow&stargazers=1&theme=Light" alt="TruthLens Banner" width="100%"/>

  <br/>
  <br/>

  [![Live Demo](https://img.shields.io/badge/Live%20Demo-truthlens--delta--one.vercel.app-blue?style=for-the-badge&logo=vercel)](https://truthlens-delta-one.vercel.app)
  [![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
  [![Flask](https://img.shields.io/badge/Flask-Backend-black?style=for-the-badge&logo=flask)](https://flask.palletsprojects.com)
  [![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## What is TruthLens?

**TruthLens** is a web app that detects fake news using **5 Machine Learning models**. Paste any news article, and it instantly tells you whether it's **Real ✅** or **Fake ❌** — with confidence scores from each model and a final majority verdict.

---

## Live Preview

<div align="center">
  <a href="https://truthlens-delta-one.vercel.app">
    <img src="https://api.microlink.io?url=https%3A%2F%2Ftruthlensdelta-one.vercel.app&screenshot=true&meta=false&embed=screenshot.url" alt="TruthLens Live Site" width="80%" style="border-radius: 12px; border: 1px solid #e4e2de;"/>
  </a>
  <br/>
  <sub>👆 Click to open the live site</sub>
</div>

---

## Features

- 🔬 **5 ML classifiers** running in parallel on every article
- 🗳️ **Majority voting** for a final Real / Fake decision
- 📊 **Confidence scores** shown for each model
- 🌍 **5 language UI** — English, Tamil, Hindi, Telugu, Kannada
- 📱 **Fully responsive** — works on mobile and desktop
- ⚡ **Instant results** — pre-trained models, no retraining needed

---

## Model Accuracy

| # | Model | Accuracy | F1 Score |
|---|-------|----------|----------|
| 1 | 🌲 Random Forest | **99.47%** | 99.51% |
| 2 | 🌳 Decision Tree | **99.27%** | 99.32% |
| 3 | 📐 Linear SVM | **99.17%** | 99.23% |
| 4 | 📈 Logistic Regression | **98.37%** | 98.51% |
| 5 | 🎲 Naive Bayes | **94.77%** | 95.16% |

> All models trained on 15,000 balanced samples from the [Fake and Real News Dataset](https://huggingface.co/datasets/genesisqu/fake-real-news).

---

## How It Works

```
Article Text
    ↓
Text Cleaning  →  lowercase, remove URLs, punctuation & stopwords
    ↓
TF-IDF         →  converts text into 5,000 numerical features
    ↓
5 ML Models    →  each gives a Real or Fake prediction
    ↓
Majority Vote  →  final verdict based on 3+ models agreeing
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Python 3, Flask |
| **ML** | Scikit-Learn, joblib, TF-IDF |
| **Frontend** | HTML, CSS, JavaScript, Lucide Icons |
| **Charts** | Chart.js |
| **Fonts** | Sora + Plus Jakarta Sans (Google Fonts) |
| **Hosting** | Vercel |

---

## Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/KEVINLOURDU/TruthLens.git
cd TruthLens

# 2. Install dependencies
pip install -r requirements.txt

# 3. Start the app
python app.py

# 4. Open in browser
# http://localhost:5000
```

> No model training needed — the pre-trained `.joblib` files are already included.

---

## Pages

| Page | Description |
|------|-------------|
| **Home** | Overview, stats and pipeline explanation |
| **Detection** | Paste article → get Real / Fake verdict |
| **Dataset Info** | Details about the training data |
| **Model Performance** | Charts, accuracy tables & confusion matrices |
| **About** | Project background and methodology |
| **Contact** | Contact form |

---

## Multilingual UI

Switch between 5 languages using the top-right dropdown:

`English` &nbsp;•&nbsp; `தமிழ் (Tamil)` &nbsp;•&nbsp; `हिन्दी (Hindi)` &nbsp;•&nbsp; `తెలుగు (Telugu)` &nbsp;•&nbsp; `ಕನ್ನಡ (Kannada)`

---

## Author

Made with ❤️ by **Kevin Lourdu**

[![GitHub](https://img.shields.io/badge/GitHub-KEVINLOURDU-181717?style=flat-square&logo=github)](https://github.com/KEVINLOURDU)
[![Live Site](https://img.shields.io/badge/Live%20Site-truthlens--delta--one.vercel.app-blue?style=flat-square&logo=vercel)](https://truthlens-delta-one.vercel.app)

---

<div align="center">
  <sub>⭐ Star this repo if you found it useful!</sub>
</div>
