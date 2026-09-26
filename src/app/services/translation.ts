import { Injectable, signal } from '@angular/core';

export type Language = 'fr' | 'en' | 'ar';

export interface Translations {
  [key: string]: {
    fr: string;
    en: string;
    ar: string;
  };
}

export const TRANSLATIONS: Translations = {
  // ══ NAVBAR ══
  nav_history: {
    fr: "Historique",
    en: "History",
    ar: "السجل"
  },
  nav_logout: {
    fr: "Déconnexion",
    en: "Logout",
    ar: "تسجيل الخروج"
  },
  nav_back_analyzer: {
    fr: "Retour au Studio",
    en: "Back to Studio",
    ar: "العودة للاستوديو"
  },

  // ══ HERO ══
  hero_eyebrow: {
    fr: "Studio de Rédaction",
    en: "Editorial Studio",
    ar: "استوديو التحرير"
  },
  hero_title_prefix: {
    fr: "Analyse & ",
    en: "Analysis & ",
    ar: "تحليل و"
  },
  hero_title_suffix: {
    fr: "Perfectionnement",
    en: "Optimization",
    ar: "تحسين المحتوى"
  },
  hero_subtitle: {
    fr: "Évaluez la clarté, le ton et l'impact de vos textes pour obtenir une révision sur-mesure.",
    en: "Evaluate text clarity, tone, and impact to get a tailored professional revision.",
    ar: "قَيّم وضوح ونبرة وتأثير نصوصك واحصل على مراجعة احترافية مخصصة."
  },

  // ══ INPUT PANEL ══
  panel_input_title: {
    fr: "Texte à analyser",
    en: "Text to Analyze",
    ar: "النص المراد تحليله"
  },
  char_count: {
    fr: "caractères",
    en: "characters",
    ar: "حرف"
  },
  placeholder_text: {
    fr: "Rédigez ou collez votre texte ici pour obtenir une analyse détaillée...",
    en: "Write or paste your text here to get a detailed analysis...",
    ar: "اكتب أو الصق نصك هنا للحصول على تحليل مفصل..."
  },
  platform_linkedin: {
    fr: "LinkedIn",
    en: "LinkedIn",
    ar: "لينكد إن"
  },
  platform_facebook: {
    fr: "Facebook",
    en: "Facebook",
    ar: "فيسبوك"
  },
  platform_email: {
    fr: "Email",
    en: "Email",
    ar: "بريد إلكتروني"
  },
  platform_generic: {
    fr: "Générique",
    en: "Generic",
    ar: "عام"
  },
  btn_analyze: {
    fr: "Lancer l'analyse",
    en: "Analyze Content",
    ar: "بدء التحليل"
  },
  btn_analyzing: {
    fr: "Analyse en cours...",
    en: "Analyzing...",
    ar: "جاري التحليل..."
  },

  // ══ RESULTS ══
  score_title: {
    fr: "Indice de Qualité",
    en: "Quality Score",
    ar: "مؤشر الجودة"
  },
  verdict_great: {
    fr: "Excellente rédaction",
    en: "Excellent writing",
    ar: "صياغة ممتازة"
  },
  verdict_ok: {
    fr: "Bonne structure",
    en: "Good structure",
    ar: "بنية جيدة"
  },
  verdict_low: {
    fr: "Révision recommandée",
    en: "Revision recommended",
    ar: "يوصى بالمراجعة"
  },
  criteria_title: {
    fr: "Critères d'Évaluation",
    en: "Evaluation Criteria",
    ar: "معايير التقييم"
  },
  strengths_title: {
    fr: "Points Forts",
    en: "Strengths",
    ar: "نقاط القوة"
  },
  weaknesses_title: {
    fr: "Axes d'Amélioration",
    en: "Areas for Improvement",
    ar: "مجالات التحسين"
  },
  recommendations_title: {
    fr: "Conseils Éditoriaux",
    en: "Editorial Advice",
    ar: "نصائح تحريرية"
  },
  btn_improve: {
    fr: "Générer la version perfectionnée",
    en: "Generate Improved Version",
    ar: "إنشاء النسخة المحسّنة"
  },
  btn_improving: {
    fr: "Rédaction en cours...",
    en: "Rewriting...",
    ar: "جاري إعادة الصياغة..."
  },

  // ══ IMPROVED VERSION PANEL ══
  improved_panel_title: {
    fr: "Version Révisée & Optimisée",
    en: "Revised & Optimized Version",
    ar: "النسخة المراجعة والمحسّنة"
  },
  improved_badge: {
    fr: "Style perfectionné",
    en: "Refined Style",
    ar: "أسلوب محسّن"
  },
  btn_copy: {
    fr: "Copier le texte",
    en: "Copy Text",
    ar: "نسخ النص"
  },
  btn_copied: {
    fr: "Copié !",
    en: "Copied!",
    ar: "تم النسخ!"
  },
  btn_compare: {
    fr: "Comparer avec l'original",
    en: "Compare with Original",
    ar: "مقارنة مع الأصل"
  },
  btn_hide_compare: {
    fr: "Masquer la comparaison",
    en: "Hide Comparison",
    ar: "إخفاء المقارنة"
  },
  btn_apply: {
    fr: "Utiliser ce texte",
    en: "Use This Text",
    ar: "استخدام هذا النص"
  },

  // ══ COMPARISON VIEW ══
  comparison_title: {
    fr: "Comparaison des versions",
    en: "Version Comparison",
    ar: "مقارنة النسخ"
  },
  comp_original_tag: {
    fr: "Texte original",
    en: "Original Text",
    ar: "النص الأصلي"
  },
  comp_improved_tag: {
    fr: "Version optimisée",
    en: "Optimized Version",
    ar: "النسخة المحسّنة"
  },
  comp_revised_status: {
    fr: "Version révisée",
    en: "Revised Version",
    ar: "نسخة مراجعة"
  },

  // ══ EMPTY STATE ══
  empty_title: {
    fr: "Prêt à réviser votre texte",
    en: "Ready to Evaluate Your Text",
    ar: "جاهز لتقييم نصك"
  },
  empty_sub: {
    fr: "Entrez votre contenu et sélectionnez le canal pour obtenir une évaluation complète et une version optimisée.",
    en: "Enter your content and select the channel to get a complete evaluation and an optimized version.",
    ar: "أدخل محتواك وحدد القناة للحصول على تقييم كامل ونسخة محسّنة."
  },

  // ══ HISTORY PAGE ══
  history_hero_eyebrow: {
    fr: "Archives Éditoriales",
    en: "Editorial Archives",
    ar: "الأرشيف التحريري"
  },
  history_hero_title: {
    fr: "Historique des Révisions",
    en: "Revision History",
    ar: "سجل المراجعات"
  },
  history_hero_sub: {
    fr: "Consultez vos évaluations et révisions de textes précédentes.",
    en: "View your past evaluations and text revisions.",
    ar: "عرض التقييمات ومراجعات النصوص السابقة."
  },
  history_empty_title: {
    fr: "Aucune révision enregistrée",
    en: "No Revisions Saved",
    ar: "لا توجد مراجعات محفوظة"
  },
  history_empty_sub: {
    fr: "Évaluez votre premier texte pour le retrouver dans vos archives.",
    en: "Evaluate your first text to find it in your archives.",
    ar: "قم بتقييم نصك الأول للعثور عليه في أرشيفك."
  },
  history_btn_new: {
    fr: "Nouvelle évaluation →",
    en: "New Evaluation →",
    ar: "تقييم جديد ←"
  },
  history_applied_tips: {
    fr: "Conseils appliqués",
    en: "Applied Advice",
    ar: "النصائح المطبقة"
  },
  btn_delete: {
    fr: "Supprimer",
    en: "Delete",
    ar: "حذف"
  },

  // ══ AUTH PAGES ══
  auth_login_welcome: {
    fr: "Bon retour 👋",
    en: "Welcome back 👋",
    ar: "مرحباً بعودتك 👋"
  },
  auth_login_sub: {
    fr: "Accédez à votre espace de rédaction",
    en: "Access your editorial workspace",
    ar: "الوصول إلى مساحة التحرير الخاصة بك"
  },
  auth_google_btn: {
    fr: "Se connecter avec Google",
    en: "Sign in with Google",
    ar: "تسجيل الدخول باستخدام جوجل"
  },
  auth_google_signup_btn: {
    fr: "Continuer avec Google",
    en: "Continue with Google",
    ar: "المتابعة باستخدام جوجل"
  },
  auth_or: {
    fr: "ou",
    en: "or",
    ar: "أو"
  },
  auth_email_placeholder: {
    fr: "Adresse email",
    en: "Email Address",
    ar: "البريد الإلكتروني"
  },
  auth_password_placeholder: {
    fr: "Mot de passe",
    en: "Password",
    ar: "كلمة المرور"
  },
  auth_login_submit: {
    fr: "Se connecter",
    en: "Sign In",
    ar: "تسجيل الدخول"
  },
  auth_login_submitting: {
    fr: "Connexion...",
    en: "Signing in...",
    ar: "جاري تسجيل الدخول..."
  },
  auth_forgot_link: {
    fr: "Mot de passe oublié ?",
    en: "Forgot password?",
    ar: "نسيت كلمة المرور؟"
  },
  auth_no_account: {
    fr: "Pas encore de compte ?",
    en: "Don't have an account?",
    ar: "ليس لديك حساب؟"
  },
  auth_signup_link: {
    fr: "Créer un compte",
    en: "Sign Up",
    ar: "إنشاء حساب"
  },
  auth_signup_title: {
    fr: "Créer un compte ✨",
    en: "Create an Account ✨",
    ar: "إنشاء حساب جديد ✨"
  },
  auth_signup_sub: {
    fr: "Rejoignez Mobde3 et perfectionnez vos textes",
    en: "Join Mobde3 and refine your texts",
    ar: "انضم إلى مبدع وحسّن نصوصك"
  },
  auth_firstname_placeholder: {
    fr: "Prénom",
    en: "First Name",
    ar: "الاسم الأول"
  },
  auth_lastname_placeholder: {
    fr: "Nom",
    en: "Last Name",
    ar: "اسم العائلة"
  },
  auth_signup_submit: {
    fr: "Créer mon compte",
    en: "Create Account",
    ar: "إنشاء حسابي"
  },
  auth_already_account: {
    fr: "Déjà un compte ?",
    en: "Already have an account?",
    ar: "لديك حساب بالفعل؟"
  },

  // ══ IMAGE UPLOAD & COMPATIBILITÉ ══
  image_upload_label: {
    fr: "Ajouter une image (optionnel)",
    en: "Add an image (optional)",
    ar: "إضافة صورة (اختياري)"
  },
  image_upload_hint: {
    fr: "JPG, PNG, WebP · max 5 Mo",
    en: "JPG, PNG, WebP · max 5 MB",
    ar: "JPG, PNG, WebP · 5 ميغا بايت كحد أقصى"
  },
  image_upload_cta: {
    fr: "Cliquer pour sélectionner une image",
    en: "Click to select an image",
    ar: "انقر لاختيار صورة"
  },
  btn_analyze_image: {
    fr: "Analyser texte + image",
    en: "Analyze text + image",
    ar: "تحليل النص + الصورة"
  },
  btn_analyzing_image: {
    fr: "Analyse en cours…",
    en: "Analyzing…",
    ar: "جارٍ التحليل…"
  },
  image_compat_title: {
    fr: "Compatibilité Texte / Image",
    en: "Text / Image Compatibility",
    ar: "توافق النص / الصورة"
  },
  image_compat_explanation: {
    fr: "Analyse",
    en: "Analysis",
    ar: "التحليل"
  },
  image_compat_suggestions: {
    fr: "Suggestions d'amélioration",
    en: "Improvement suggestions",
    ar: "اقتراحات التحسين"
  },
  image_error_format: {
    fr: "Format non supporté. Utilisez JPG, PNG ou WebP.",
    en: "Unsupported format. Use JPG, PNG or WebP.",
    ar: "صيغة غير مدعومة. استخدم JPG أو PNG أو WebP."
  },
  image_error_size: {
    fr: "L'image dépasse 5 Mo. Choisissez un fichier plus petit.",
    en: "Image exceeds 5 MB. Please choose a smaller file.",
    ar: "حجم الصورة يتجاوز 5 ميغابايت. اختر ملفاً أصغر حجماً."
  },
  image_error_missing: {
    fr: "Veuillez sélectionner une image avant de lancer l'analyse.",
    en: "Please select an image before running the analysis.",
    ar: "يرجى اختيار صورة قبل بدء التحليل."
  },
  image_error_missing_text: {
    fr: "Veuillez saisir un texte avant d'analyser avec une image.",
    en: "Please enter some text before analyzing with an image.",
    ar: "يرجى إدخال نص قبل التحليل مع صورة."
  },
  image_error_api: {
    fr: "Erreur lors de l'analyse image. Veuillez réessayer.",
    en: "Image analysis failed. Please try again.",
    ar: "فشل تحليل الصورة. يرجى المحاولة مجدداً."
  },

  // ══ ANALYSE DE QUALITÉ (Tâche 1 — redesign carte texte) ══
  quality_analysis_title: {
    fr: "ANALYSE DE QUALITÉ",
    en: "QUALITY ANALYSIS",
    ar: "تحليل الجودة"
  },
  quality_analysis_label: {
    fr: "Analyse",
    en: "Analysis",
    ar: "التحليل"
  },
  quality_criteria_label: {
    fr: "CRITÈRES DE QUALITÉ",
    en: "QUALITY CRITERIA",
    ar: "معايير الجودة"
  },

  // ══ RÉÉCRITURE POUR IMAGE (Tâche 2) ══
  btn_improve_for_image: {
    fr: "Réécrire le texte pour cette image",
    en: "Rewrite text for this image",
    ar: "إعادة كتابة النص لهذه الصورة"
  },
  btn_improving_for_image: {
    fr: "Réécriture en cours…",
    en: "Rewriting…",
    ar: "جارٍ إعادة الكتابة…"
  },
  image_improved_title: {
    fr: "Texte réécrit pour l'image",
    en: "Text rewritten for the image",
    ar: "النص المعاد كتابته للصورة"
  },
  image_improved_badge: {
    fr: "Optimisé",
    en: "Optimized",
    ar: "محسَّن"
  },
  image_new_score: {
    fr: "Nouveau score de compatibilité",
    en: "New compatibility score",
    ar: "درجة التوافق الجديدة"
  },
  image_improve_error: {
    fr: "Erreur lors de la réécriture. Veuillez réessayer.",
    en: "Rewriting failed. Please try again.",
    ar: "فشلت إعادة الكتابة. يرجى المحاولة مجدداً."
  },
  btn_use_rewritten: {
    fr: "Utiliser ce texte",
    en: "Use this text",
    ar: "استخدام هذا النص"
  },
  btn_compare_image: {
    fr: "Comparer",
    en: "Compare",
    ar: "مقارنة"
  },
  btn_hide_compare_image: {
    fr: "Masquer",
    en: "Hide",
    ar: "إخفاء"
  },
  comp_rewritten_tag: {
    fr: "Réécrit",
    en: "Rewritten",
    ar: "معاد كتابته"
  },

  // ══ POINTS FORTS & POINTS FAIBLES ══
  points_forts_title: {
    fr: "POINTS FORTS",
    en: "STRENGTHS",
    ar: "نقاط القوة"
  },
  points_faibles_title: {
    fr: "POINTS FAIBLES",
    en: "WEAKNESSES",
    ar: "نقاط الضعف"
  },
  no_strengths_notable: {
    fr: "Aucun point fort particulier détecté",
    en: "No notable strengths detected",
    ar: "لم يتم رصد نقاط قوة محددة"
  },
  no_weaknesses_notable: {
    fr: "Aucun point faible notable",
    en: "No notable weaknesses",
    ar: "لا توجد نقاط ضعف بارزة"
  }
};

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Language>('fr');

  constructor() {
    this.initLanguage();
  }

  private initLanguage() {
    const saved = localStorage.getItem('mobde3_lang') as Language;
    if (saved && (saved === 'fr' || saved === 'en' || saved === 'ar')) {
      this.setLanguage(saved);
    } else {
      this.setLanguage('fr');
    }
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    localStorage.setItem('mobde3_lang', lang);

    // Gestions de l'orientation RTL / LTR
    const isRtl = lang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    if (isRtl) {
      document.body.classList.add('rtl-mode');
    } else {
      document.body.classList.remove('rtl-mode');
    }
  }

  get(key: string): string {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[this.currentLang()] || entry['fr'] || key;
  }

  isRtl(): boolean {
    return this.currentLang() === 'ar';
  }
}
