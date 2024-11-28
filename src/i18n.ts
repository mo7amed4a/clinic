import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './../public/locales/en.json';
import translationAR from './../public/locales/ar.json';

// const languageDetectorOptions = {
//   order: ['querystring', 'localStorage'],
//   caches: ['localStorage'],
// };

i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ar: {
        translation: translationAR,
      },
    },
    detection: {
      order: ["localStorage", "htmlTag", "cookie", "path"],
      caches: ["localStorage"],
    },
    fallbackLng: 'ar',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    // detection: languageDetectorOptions,
  });

export default i18n;
