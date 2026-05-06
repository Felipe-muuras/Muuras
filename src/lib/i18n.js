import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locale/en.json';
import duTranslations from '../locale/du.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enTranslations,
    },
    du: {
      ...duTranslations,
    },
  },
  lng: 'en',
});
