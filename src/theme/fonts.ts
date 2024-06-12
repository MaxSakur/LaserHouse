interface FontStyles {
  black?: string; // Сделаем свойства необязательными, чтобы избежать ошибок
  blackItalic?: string;
  bold?: string;
  boldItalic?: string;
  heavyItalic?: string;
  lightItalic?: string;
  medium?: string;
  mediumItalic?: string;
  regular?: string;
  semiboldItalic?: string;
  thinItalic?: string;
  ultralightItalic?: string;
  [key: string]: string | undefined; // Разрешим дополнительные свойства для гибкости
}

interface Fonts {
  SFProDisplay: FontStyles;
  Roboto: FontStyles;
}

const fonts: Fonts = {
  SFProDisplay: {
    blackItalic: 'SFPRODISPLAYBLACKITALIC',
    bold: 'SFPRODISPLAYBOLD',
    heavyItalic: 'SFPRODISPLAYHEAVYITALIC',
    lightItalic: 'SFPRODISPLAYLIGHTITALIC',
    medium: 'SFPRODISPLAYMEDIUM',
    regular: 'SFPRODISPLAYREGULAR',
    semiboldItalic: 'SFPRODISPLAYSEMIBOLDITALIC',
    thinItalic: 'SFPRODISPLAYTHINITALIC',
    ultralightItalic: 'SFPRODISPLAYULTRALIGHTITALIC',
  },
  Roboto: {
    black: 'Roboto-Black',
    blackItalic: 'Roboto-BlackItalic',
    bold: 'Roboto-Bold',
    boldItalic: 'Roboto-BoldItalic',
    italic: 'Roboto-Italic',
    light: 'Roboto-Light',
    lightItalic: 'Roboto-LightItalic',
    medium: 'Roboto-Medium',
    mediumItalic: 'Roboto-MediumItalic',
    regular: 'Roboto-Regular',
    thin: 'Roboto-Thin',
    thinItalic: 'Roboto-ThinItalic',
  },
};

// Типизация для стилей текста
interface TextStyles {
  fontFamily?: string;
  fontSize: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

interface TextStylesCollection {
  title1: TextStyles;
  verificationCode: TextStyles;
  title2: TextStyles;
  headline1: TextStyles;
  headline2: TextStyles;
  sectionLabel: TextStyles;
  button: TextStyles;
  body1: TextStyles;
  body2: TextStyles;
  tabBarIconText: TextStyles;
}

const textStyles: TextStylesCollection = {
  title1: {
    fontFamily: fonts.SFProDisplay.bold,
    fontSize: 32,
    fontWeight: 'bold',
  },
  verificationCode: {
    fontFamily: fonts.SFProDisplay.bold,
    fontSize: 24,
    fontWeight: 'bold',
  },
  title2: {
    fontFamily: fonts.SFProDisplay.medium,
    fontSize: 20,
  },
  headline1: {
    fontFamily: fonts.SFProDisplay.bold,
    fontSize: 18,
  },
  headline2: {
    fontFamily: fonts.SFProDisplay.regular,
    fontSize: 16,
  },
  sectionLabel: {
    fontFamily: fonts.SFProDisplay.regular,
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    fontFamily: fonts.SFProDisplay.medium,
    fontSize: 16,
  },
  body1: {
    fontFamily: fonts.SFProDisplay.regular,
    fontSize: 14,
  },
  body2: {
    fontFamily: fonts.SFProDisplay.lightItalic,
    fontSize: 12,
  },
  tabBarIconText: {
    fontFamily: fonts.SFProDisplay.medium,
    fontSize: 10,
  },
};

export {fonts, textStyles};
