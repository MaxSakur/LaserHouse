import 'intl-pluralrules'; // Импорт полифилла для Intl.PluralRules
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  ua: {
    translation: require('./src/locales/ua/translation.json'),
  },
  pl: {
    translation: require('./src/locales/pl/translation.json'),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ua',
  fallbackLng: ['ua', 'pl'],
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
