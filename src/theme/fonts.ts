interface FontStyles {
  black?: string;
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
  [key: string]: string | undefined;
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
  mainValue: TextStyles;
  currency: TextStyles;
  title1: TextStyles;
  verificationCode: TextStyles;
  title2: TextStyles;
  couponTitle: TextStyles;
  headline1: TextStyles;
  headline2: TextStyles;
  sectionLabel: TextStyles;
  button: TextStyles;
  body1: TextStyles;
  body2: TextStyles;
  tabBarIconText: TextStyles;
  dueDate: TextStyles;
}

const textStyles: TextStylesCollection = {
  mainValue: {
    fontFamily: fonts.SFProDisplay.medium,
    fontSize: 58,
  },
  currency: {
    fontFamily: fonts.SFProDisplay.medium,
    fontSize: 38,
  },
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
    fontWeight: '600',
    fontSize: 20,
  },
  couponTitle: {
    fontFamily: fonts.SFProDisplay.bold,
    fontSize: 18,
    fontWeight: '600',
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
  dueDate: {
    fontFamily: fonts.SFProDisplay.regular,
    fontSize: 10,
  },
};

export {fonts, textStyles};
