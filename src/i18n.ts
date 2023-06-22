import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

i18n.use(LanguageDetector).init({
  resources: {
    ru: {
      translation: require("src/shared/locales/ru.json"),
    },
    kk: {
      translation: require("src/shared/locales/kk.json"),
    },
    en: {
        translation: require("src/shared/locales/en.json"),
      },
  },
  fallbackLng: "en",
  detection: {
    order: ["navigator", "htmlTag"],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;