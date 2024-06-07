const fonts = {
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

const textStyles = {
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
