// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import translationEN from './en.json';
import translationNP from './np.json';

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  np: {
    translation: translationNP,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // set the default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
