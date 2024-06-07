import i18next from 'i18next';

const language = i18next.language;

export const phoneMask =
  language === 'ua' ? '+380 (99) *** ** **' : '+48 (99) *** ****';
export const countyPhoneCode = language === 'ua' ? '+380 ' : '+48 ';
