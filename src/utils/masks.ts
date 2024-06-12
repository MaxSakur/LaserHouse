import i18next from 'i18next';

export const language = i18next.language;

// export const phoneMask =
//   language === 'ua' ? '+380 (99) *** ** **' : '+48 (99) *** ****';
// export const countyPhoneCode = language === 'ua' ? '+380 ' : '+48 ';
export const phoneMask = '+380 (99) *** ** **';
export const countyPhoneCode = '+380 ';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
