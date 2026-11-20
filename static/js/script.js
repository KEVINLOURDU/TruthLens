/**
 * TruthLens - Multilingual & Interactive Frontend Scripts
 * Supporting 5 Languages: English, Tamil (தமிழ்), Hindi (हिन्दी), Telugu (తెలుగు), Kannada (ಕನ್ನಡ)
 */

const TRANSLATIONS = {
    en: {
        nav_brand: "TruthLens",
        nav_home: "Home",
        nav_detect: "Detection",
        nav_dataset: "Dataset Info",
        nav_training: "Model Training",
        nav_performance: "Model Performance",
        nav_about: "About Project",
        nav_contact: "Contact",
        
        hero_badge: "AI & ML Powered Verification",
        hero_title_1: "TruthLens – Multilingual",
        hero_title_2: "Fake News Detection",
        hero_desc: "Verify news authenticity with 5 robust Machine Learning models: Logistic Regression, Naive Bayes, Decision Tree, Random Forest, and Linear SVM.",
        btn_start_detect: "Start Detection",
        btn_view_perf: "Model Performance",
        
        stat_algorithms: "5 ML Models",
        stat_algorithms_sub: "Trained & Evaluated",
        stat_accuracy: "99.4%+",
        stat_accuracy_sub: "Top Model Accuracy",
        stat_dataset: "44,898",
        stat_dataset_sub: "Verified News Articles",
        stat_languages: "5 Languages",
        stat_languages_sub: "Interface Support",
        
        detect_title: "News Verification Center",
        detect_subtitle: "Paste or enter the news headline and body text to run inference on all 5 trained models.",
        label_headline: "News Headline / Title",
        ph_headline: "Enter the news title or headline here...",
        label_article: "Full News Article Text",
        ph_article: "Paste the full news article content here (at least 20 words recommended)...",
        samples_label: "Quick Samples:",
        sample_real: "Sample Real News",
        sample_fake: "Sample Fake News",
        btn_detect: "Detect News Authenticity",
        btn_clear: "Clear",
        
        verdict_badge: "Majority Voting Outcome",
        verdict_real: "VERIFIED REAL NEWS",
        verdict_fake: "FLAGGED FAKE NEWS",
        verdict_vote_text: "majority vote based on 5 independent machine learning classifiers.",
        models_breakdown: "Individual Model Predictions",
        confidence_text: "Confidence Score:",
        
        history_title: "Session Prediction History",
        history_headline: "Headline",
        history_verdict: "Verdict",
        history_vote: "Votes",
        history_time: "Time",
        no_history: "No articles analyzed in this session yet.",
        
        disclaimer_title: "AI Veracity Disclaimer",
        disclaimer_text: "TruthLens utilizes statistical Natural Language Processing and Machine Learning models trained on historical datasets. While highly accurate, automated predictions should serve as assistive tools rather than definitive journalistic fact-checks. Note: Prediction models process English text; translations apply to the website interface.",
        
        footer_text: "© 2026 TruthLens – Multilingual Fake News Detection System."
    },
    ta: {
        nav_brand: "TruthLens",
        nav_home: "முகப்பு",
        nav_detect: "கண்டறிதல்",
        nav_dataset: "தரவுத்தொகுப்பு",
        nav_training: "மாதிரி பயிற்சி",
        nav_performance: "செயல்திறன்",
        nav_about: "திட்டம் பற்றி",
        nav_contact: "தொடர்பு",
        
        hero_badge: "செயற்கை நுண்ணறிவு சரிபார்ப்பு",
        hero_title_1: "TruthLens – பன்மொழி",
        hero_title_2: "போலி செய்தி கண்டறிதல்",
        hero_desc: "லாஜிஸ்டிக் பின்னடைவு, நைவ் பேய்ஸ், டெசிஷன் ட்ரீ, ரேண்டம் ஃபாரஸ்ட் மற்றும் எஸ்.வி.எம் ஆகிய 5 இயந்திர வழிமுறைகளைக் கொண்டு செய்திகளைச் சரிபாருங்கள்.",
        btn_start_detect: "கண்டறிதலைத் தொடங்கு",
        btn_view_perf: "மாதிரி செயல்திறன்",
        
        stat_algorithms: "5 மாதிரிகள்",
        stat_algorithms_sub: "பயிற்சி பெற்றவை",
        stat_accuracy: "99.4%+",
        stat_accuracy_sub: "உச்ச துல்லியம்",
        stat_dataset: "44,898",
        stat_dataset_sub: "செய்தித் தரவுகள்",
        stat_languages: "5 மொழிகள்",
        stat_languages_sub: "பயனர் இடைமுகம்",
        
        detect_title: "செய்தி சரிபார்ப்பு மையம்",
        detect_subtitle: "5 பயிற்சி பெற்ற மாதிரிகளிலும் பகுப்பாய்வு செய்ய தலைப்பு மற்றும் செய்தி உள்ளடக்கத்தை உள்ளிடவும்.",
        label_headline: "செய்தித் தலைப்பு",
        ph_headline: "செய்தி தலைப்பை இங்கே உள்ளிடவும்...",
        label_article: "முழு செய்தி உரை",
        ph_article: "முழு செய்தி உள்ளடக்கத்தை இங்கே ஒட்டவும்...",
        samples_label: "மாதிரி செய்திகள்:",
        sample_real: "உண்மை செய்தி மாதிரி",
        sample_fake: "போலி செய்தி மாதிரி",
        btn_detect: "செய்தியைச் சரிபார்க்கவும்",
        btn_clear: "அழிக்கவும்",
        
        verdict_badge: "பெரும்பான்மை வாக்கு முடிவு",
        verdict_real: "உண்மையான செய்தி (REAL NEWS)",
        verdict_fake: "போலி செய்தி (FAKE NEWS)",
        verdict_vote_text: "5 தனித்தனி இயந்திரக் கற்றல் மாதிரிகளின் பெரும்பான்மை தீர்ப்பு.",
        models_breakdown: "தனிப்பட்ட மாதிரி கணிப்புகள்",
        confidence_text: "நம்பகத்தன்மை அளவு:",
        
        history_title: "அமர்வு முந்தைய முடிவுகள்",
        history_headline: "தலைப்பு",
        history_verdict: "தீர்ப்பு",
        history_vote: "வாக்குகள்",
        history_time: "நேரம்",
        no_history: "இந்த அமர்வில் இதுவரை செய்திகள் ஆய்வு செய்யப்படவில்லை.",
        
        disclaimer_title: "முக்கிய AI அறிவிப்பு",
        disclaimer_text: "TruthLens வரலாற்று தரவுகளால் பயிற்றுவிக்கப்பட்ட இயந்திர கற்றல் மாதிரிகளைப் பயன்படுத்துகிறது. கணிப்பு மாதிரிகள் ஆங்கில உரையை பகுப்பாய்வு செய்கின்றன; மொழிபெயர்ப்பு இணையதள இடைமுகத்திற்கு பொருந்தும்.",
        
        footer_text: "© 2026 TruthLens – பன்மொழி போலி செய்தி கண்டறிதல் தளம்."
    },
    hi: {
        nav_brand: "TruthLens",
        nav_home: "मुख्य पृष्ठ",
        nav_detect: "समाचार जांच",
        nav_dataset: "डेटासेट विवरण",
        nav_training: "मॉडल प्रशिक्षण",
        nav_performance: "मॉडल प्रदर्शन",
        nav_about: "परियोजना के बारे में",
        nav_contact: "संपर्क",
        
        hero_badge: "एआई एवं मशीन लर्निंग सत्यापन",
        hero_title_1: "TruthLens – बहुभाषी",
        hero_title_2: "फेक न्यूज़ डिटेक्शन",
        hero_desc: "लॉजिस्टिक रिग्रेशन, नेव बेयस, डिसीजन ट्री, रैंडम फॉरेस्ट और एसवीएम सहित 5 शक्तिशाली मॉडलों द्वारा समाचार की सत्यता की जांच करें।",
        btn_start_detect: "जांच शुरू करें",
        btn_view_perf: "मॉडल प्रदर्शन देखें",
        
        stat_algorithms: "5 एमएल मॉडल",
        stat_algorithms_sub: "प्रशिक्षित और परीक्षित",
        stat_accuracy: "99.4%+",
        stat_accuracy_sub: "सर्वोच्च सटीकता",
        stat_dataset: "44,898",
        stat_dataset_sub: "सत्यापित समाचार लेख",
        stat_languages: "5 भाषाएं",
        stat_languages_sub: "इंटरफ़ेस समर्थन",
        
        detect_title: "समाचार सत्यापन केंद्र",
        detect_subtitle: "सभी 5 मॉडलों से परिणाम प्राप्त करने के लिए समाचार शीर्षक और मुख्य भाग दर्ज करें।",
        label_headline: "समाचार शीर्षक",
        ph_headline: "यहाँ समाचार का शीर्षक दर्ज करें...",
        label_article: "समाचार का पूरा विवरण",
        ph_article: "यहाँ समाचार का पूरा विवरण पेस्ट करें...",
        samples_label: "उदाहरण समाचार:",
        sample_real: "सच्ची खबर का नमूना",
        sample_fake: "फर्जी खबर का नमूना",
        btn_detect: "समाचार की सत्यता जांचें",
        btn_clear: "साफ़ करें",
        
        verdict_badge: "बहुमत निर्णय परिणाम",
        verdict_real: "सत्यापित सच्ची खबर (REAL NEWS)",
        verdict_fake: "पहचानी गई फर्जी खबर (FAKE NEWS)",
        verdict_vote_text: "5 स्वतंत्र मशीन लर्निंग वर्गीकरणकर्ताओं के बहुमत पर आधारित निर्णय।",
        models_breakdown: "प्रत्येक मॉडल का व्यक्तिगत परिणाम",
        confidence_text: "विश्वसनीयता स्कोर:",
        
        history_title: "सत्र इतिहास",
        history_headline: "शीर्षक",
        history_verdict: "निर्णय",
        history_vote: "मत",
        history_time: "समय",
        no_history: "वर्तमान सत्र में अभी तक कोई समाचार नहीं जाँचा गया है।",
        
        disclaimer_title: "महत्वपूर्ण एआई अस्वीकरण",
        disclaimer_text: "TruthLens ऐतिहासिक डेटासेट पर प्रशिक्षित मशीन लर्निंग एल्गोरिदम का उपयोग करता है। ध्यान दें: वर्तमान मॉडल मुख्य रूप से अंग्रेजी समाचार पर प्रशिक्षित हैं; बहुभाषी चयन वेबसाइट इंटरफ़ेस के लिए है।",
        
        footer_text: "© 2026 TruthLens – बहुभाषी फेक न्यूज़ डिटेक्शन सिस्टम।"
    },
    te: {
        nav_brand: "TruthLens",
        nav_home: "హోమ్",
        nav_detect: "వార్తల గుర్తింపు",
        nav_dataset: "డేటాసెట్ సమాచారం",
        nav_training: "మోడల్ శిక్షణ",
        nav_performance: "మోడల్ పనితీరు",
        nav_about: "ప్రాజెక్ట్ గురించి",
        nav_contact: "సంప్రదించండి",
        
        hero_badge: "AI ఆధారిత నిజనిర్ధారణ",
        hero_title_1: "TruthLens – బహుభాషా",
        hero_title_2: "నకిలీ వార్తల గుర్తింపు",
        hero_desc: "లాజిస్టిక్ రిగ్రెషన్, నైవ్ బేయస్, డెసిషన్ ట్రీ, రాండమ్ ఫారెస్ట్ మరియు SVM వంటి 5 మెషిన్ లెర్నింగ్ మోడల్స్‌తో వార్తల ప్రామాణికతను తనిఖీ చేయండి.",
        btn_start_detect: "గుర్తింపు ప్రారంభించండి",
        btn_view_perf: "మోడల్ పనితీరు",
        
        stat_algorithms: "5 ML మోడల్స్",
        stat_algorithms_sub: "శిక్షణ పొందినవి",
        stat_accuracy: "99.4%+",
        stat_accuracy_sub: "గరిష్ట ఖచ్చితత్వం",
        stat_dataset: "44,898",
        stat_dataset_sub: "వార్తా కథనాలు",
        stat_languages: "5 భాషలు",
        stat_languages_sub: "ఇంటర్‌ఫేస్ సపోర్ట్",
        
        detect_title: "వార్తా ప్రామాణికత కేంద్రం",
        detect_subtitle: "5 మోడళ్ల ద్వారా ఫలితాన్ని పొందడానికి వార్తా శీర్షిక మరియు వివరాలను ఇక్కడ నమోదు చేయండి.",
        label_headline: "వార్తా శీర్షిక (Headline)",
        ph_headline: "వార్తా శీర్షికను ఇక్కడ నమోదు చేయండి...",
        label_article: "పూర్తి వార్తా సమాచారం",
        ph_article: "పూర్తి వార్తా వివరాలను ఇక్కడ పేస్ట్ చేయండి...",
        samples_label: "ఉదాహరణ వార్తలు:",
        sample_real: "నిజమైన వార్త నమూనా",
        sample_fake: "నకిలీ వార్త నమూనా",
        btn_detect: "వార్తను తనిఖీ చేయండి",
        btn_clear: "క్లియర్ చేయండి",
        
        verdict_badge: "మెజారిటీ ఓటింగ్ ఫలితం",
        verdict_real: "ధృవీకరించబడిన నిజమైన వార్త (REAL NEWS)",
        verdict_fake: "గుర్తించబడిన నకిలీ వార్త (FAKE NEWS)",
        verdict_vote_text: "5 స్వతంత్ర మెషిన్ లెర్నింగ్ వర్గీకరణల మెజారిటీ ఓటింగ్ ఆధారంగా తీర్పు.",
        models_breakdown: "వ్యక్తిగత మోడల్ అంచనాలు",
        confidence_text: "ఖచ్చితత్వ స్కోరు:",
        
        history_title: "ఈ సెషన్ చరిత్ర",
        history_headline: "శీర్షిక",
        history_verdict: "ఫలితం",
        history_vote: "ఓట్లు",
        history_time: "సమయం",
        no_history: "ఈ సెషన్‌లో ఇంకా ఎలాంటి వార్తలు విశ్లేషించబడలేదు.",
        
        disclaimer_title: "ముఖ్యమైన AI హెచ్చరిక",
        disclaimer_text: "TruthLens చారిత్రక డేటాసెట్‌లపై శిక్షణ పొందిన మెషిన్ లెర్నింగ్ నమూనాలను ఉపయోగిస్తుంది. గమనిక: అంచనా నమూనాలు ఆంగ్ల భాషలోని వార్తలపై శిక్షణ పొందాయి; భాషల ఎంపిక వెబ్‌సైట్ ఇంటర్‌ఫేస్ కోసం మాత్రమే.",
        
        footer_text: "© 2026 TruthLens – బహుభాషా నకిలీ వార్తల గుర్తింపు వ్యవస్థ."
    },
    kn: {
        nav_brand: "TruthLens",
        nav_home: "ಮುಖಪುಟ",
        nav_detect: "ಸುದ್ದಿ ಪರಿಶೀಲನೆ",
        nav_dataset: "ಡೇಟಾಸೆಟ್ ಮಾಹಿತಿ",
        nav_training: "ಮಾದರಿ ತರಬೇತಿ",
        nav_performance: "ಮಾದರಿ ಕಾರ್ಯಕ್ಷಮತೆ",
        nav_about: "ಯೋಜನೆಯ ಕುರಿತು",
        nav_contact: "ಸಂಪರ್ಕಿಸಿ",
        
        hero_badge: "AI ಮತ್ತು ML ಆಧಾರಿತ ಸತ್ಯಾಸತ್ಯತೆ",
        hero_title_1: "TruthLens – ಬಹುಭಾಷಾ",
        hero_title_2: "ಸುಳ್ಳು ಸುದ್ದಿ ಪತ್ತೆಹಚ್ಚುವಿಕೆ",
        hero_desc: "ಲಾಜಿಸ್ಟಿಕ್ ರಿಗ್ರೆಷನ್, ನೇಯಿವ್ ಬೇಸ್, ಡಿಸಿಷನ್ ಟ್ರೀ, ರಾಂಡಮ್ ಫಾರೆಸ್ಟ್ ಮತ್ತು ಎಸ್‌ವಿಎಂ ಒಳಗೊಂಡ 5 ಶಕ್ತಿಶಾಲಿ ಯಂತ್ರ ಕಲಿಕೆ ಮಾದರಿಗಳ ಮೂಲಕ ಸುದ್ದಿಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
        btn_start_detect: "ಪರಿಶೀಲನೆ ಪ್ರಾರಂಭಿಸಿ",
        btn_view_perf: "ಕಾರ್ಯಕ್ಷಮತೆ ವೀಕ್ಷಿಸಿ",
        
        stat_algorithms: "5 ML ಮಾದರಿಗಳು",
        stat_algorithms_sub: "ತರಬೇತಿ ಪಡೆದಿವೆ",
        stat_accuracy: "99.4%+",
        stat_accuracy_sub: "ಗರಿಷ್ಠ ನಿಖರತೆ",
        stat_dataset: "44,898",
        stat_dataset_sub: "ಪರಿಶೀಲಿಸಿದ ಸುದ್ದಿಗಳು",
        stat_languages: "5 ಭಾಷೆಗಳು",
        stat_languages_sub: "ಇಂಟರ್‌ಫೇಸ್ ಬೆಂಬಲ",
        
        detect_title: "ಸುದ್ದಿ ಪರಿಶೀಲನಾ ಕೇಂದ್ರ",
        detect_subtitle: "5 ಮಾದರಿಗಳ ಮೂಲಕ ವಿಶ್ಲೇಷಿಸಲು ಸುದ್ದಿಯ ಶೀರ್ಷಿಕೆ ಮತ್ತು ವಿವರಗಳನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ.",
        label_headline: "ಸುದ್ದಿ ಶೀರ್ಷಿಕೆ",
        ph_headline: "ಸುದ್ದಿಯ ಶೀರ್ಷಿಕೆಯನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ...",
        label_article: "ಸಂಪೂರ್ಣ ಸುದ್ದಿ ವಿವರ",
        ph_article: "ಸಂಪೂರ್ಣ ಸುದ್ದಿಯ ವಿವರವನ್ನು ಇಲ್ಲಿ ನಕಲಿಸಿ ಪೇಸ್ಟ್ ಮಾಡಿ...",
        samples_label: "ಮಾದರಿ ಸುದ್ದಿಗಳು:",
        sample_real: "ನೈಜ ಸುದ್ದಿ ಮಾದರಿ",
        sample_fake: "ಸುಳ್ಳು ಸುದ್ದಿ ಮಾದರಿ",
        btn_detect: "ಸುದ್ದಿಯನ್ನು ಪರಿಶೀಲಿಸಿ",
        btn_clear: "ಅಳಿಸಿಹಾಕಿ",
        
        verdict_badge: "ಬಹುಮತ ಮತದಾನ ಫಲಿತಾಂಶ",
        verdict_real: "ದೃಢೀಕರಿಸಲ್ಪಟ್ಟ ನೈಜ ಸುದ್ದಿ (REAL NEWS)",
        verdict_fake: "ಗುರುತಿಸಲಾದ ಸುಳ್ಳು ಸುದ್ದಿ (FAKE NEWS)",
        verdict_vote_text: "5 ಸ್ವತಂತ್ರ ಯಂತ್ರ ಕಲಿಕೆ ಮಾದರಿಗಳ ಬಹುಮತ ತೀರ್ಪು.",
        models_breakdown: "ವೈಯಕ್ತಿಕ ಮಾದರಿ ಭವಿಷ್ಯವಾಣಿಗಳು",
        confidence_text: "ವಿಶ್ವಾಸಾರ್ಹತೆ ಸ್ಕೋರ್:",
        
        history_title: "ಈ ಸೆಷನ್ ಇತಿಹಾಸ",
        history_headline: "ಶೀರ್ಷಿಕೆ",
        history_verdict: "ತೀರ್ಪು",
        history_vote: "ಮತಗಳು",
        history_time: "ಸಮಯ",
        no_history: "ಈ ಸೆಷನ್‌ನಲ್ಲಿ ಇದುವರೆಗೆ ಯಾವುದೇ ಸುದ್ದಿ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ.",
        
        disclaimer_title: "ಪ್ರಮುಖ AI ಮುನ್ನೆಚ್ಚರಿಕೆ",
        disclaimer_text: "TruthLens ಐತಿಹಾಸಿಕ ಡೇಟಾಸೆಟ್‌ಗಳ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಯಂತ್ರ ಕಲಿಕೆ ಅಲ್ಗಾರಿದಮ್‌ಗಳನ್ನು ಬಳಸುತ್ತದೆ. ಗಮನಿಸಿ: ವಿಶ್ಲೇಷಣೆ ಮಾದರಿಗಳು ಇಂಗ್ಲಿಷ್ ಭಾಷೆಯ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದಿವೆ; ಭಾಷಾ ಆಯ್ಕೆಯು ವೆಬ್‌ಸೈಟ್ ಇಂಟರ್‌ಫೇಸ್‌ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ.",
        
        footer_text: "© 2026 TruthLens – ಬಹುಭಾಷಾ ಸುಳ್ಳು ಸುದ್ದಿ ಪತ್ತೆ ವ್ಯವಸ್ಥೆ."
    }
};

// Current active language
let currentLang = localStorage.getItem("truthlens_lang") || "en";

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = "en";
    currentLang = lang;
    localStorage.setItem("truthlens_lang", lang);
    
    const dict = TRANSLATIONS[lang];
    
    // Update elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
    
    // Update placeholders with data-i18n-ph
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
        const key = el.getAttribute("data-i18n-ph");
        if (dict[key]) {
            el.setAttribute("placeholder", dict[key]);
        }
    });
    
    // Update language select dropdown value if present
    const selector = document.getElementById("languageSelector");
    if (selector && selector.value !== lang) {
        selector.value = lang;
    }
}

// Sample News Articles for quick user testing
const SAMPLES = {
    real: {
        headline: "U.S. Senate Approves Bipartisan Infrastructure Funding Bill",
        article: "WASHINGTON (Reuters) - The United States Senate passed a major bipartisan infrastructure bill on Tuesday in a 69-30 vote, providing substantial federal funding for roads, bridges, public transit, water systems, and broadband internet access across the country. Lawmakers from both parties praised the compromise as a critical investment in long-term economic growth, sending the legislation to the House of Representatives for final approval."
    },
    fake: {
        headline: "SHOCKING: Secret Underground Alien Base Discovered Under Antarctic Ice Shelf",
        article: "BREAKING EXCLUSIVE: Whistleblowers have revealed leaked satellite photos proving a massive clandestine extraterrestrial facility operating beneath Antarctica for centuries! World leaders convened in panic at an emergency secret midnight summit to conceal this catastrophic truth from the global public before mainstream media can cover it up!"
    }
};

function loadSample(type) {
    const data = SAMPLES[type];
    if (!data) return;
    const titleInput = document.getElementById("newsTitle");
    const articleInput = document.getElementById("newsArticle");
    if (titleInput) titleInput.value = data.headline;
    if (articleInput) {
        articleInput.value = data.article;
        updateCharCounts();
    }
}

function clearInputs() {
    const titleInput = document.getElementById("newsTitle");
    const articleInput = document.getElementById("newsArticle");
    if (titleInput) titleInput.value = "";
    if (articleInput) {
        articleInput.value = "";
        updateCharCounts();
    }
    const resultBox = document.getElementById("detectionResultBox");
    if (resultBox) resultBox.scrollIntoView({ behavior: 'smooth' });
}

function updateCharCounts() {
    const article = document.getElementById("newsArticle");
    const countEl = document.getElementById("articleWordCount");
    if (article && countEl) {
        const text = article.value.trim();
        const words = text ? text.split(/\s+/).length : 0;
        const chars = text.length;
        countEl.textContent = `${words} words | ${chars} chars`;
    }
}

// Show scanning animation overlay on form submit
function initFormHandling() {
    const form = document.getElementById("detectionForm");
    const overlay = document.getElementById("scannerOverlay");
    if (form && overlay) {
        form.addEventListener("submit", function(e) {
            const articleInput = document.getElementById("newsArticle");
            if (!articleInput || !articleInput.value.trim()) {
                e.preventDefault();
                alert("Please enter or paste news article content.");
                return;
            }
            overlay.classList.add("active");
        });
    }
    
    const articleInput = document.getElementById("newsArticle");
    if (articleInput) {
        articleInput.addEventListener("input", updateCharCounts);
        updateCharCounts();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setLanguage(currentLang);
    initFormHandling();
    
    const selector = document.getElementById("languageSelector");
    if (selector) {
        selector.addEventListener("change", function(e) {
            setLanguage(e.target.value);
        });
    }
});
