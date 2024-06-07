import 'intl-pluralrules'; // Импорт полифилла для Intl.PluralRules
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const resources = {
  ua: {
    translation: require('./src/locales/ua/translation.json'),
  },
  pl: {
    translation: require('./src/locales/pl/translation.json'),
  },
  ru: {
    translation: require('./src/locales/ru/translation.json'),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ua',
  fallbackLng: ['ua', 'pl', 'ru'],
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
