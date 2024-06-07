import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizes, textStyles, presets} from '../../../../theme';

interface Styles {
  loginScreen: ViewStyle;
  title: TextStyle;
  loginScreen_content: ViewStyle;
  description: TextStyle;
  privacyText: TextStyle;
  privacyLink: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  loginScreen: {
    ...textStyles.headline1,
    ...presets.flexCenter,
    flex: 1,
    padding: sizes.l,
    backgroundColor: colors.white,
  },
  loginScreen_content: {
    gap: sizes.l,
    paddingBottom: sizes.xl,
  },
  title: {
    ...textStyles.title1,
    color: colors.primary,
    marginBottom: sizes.l,
  },
  description: {
    ...textStyles.headline2,
    color: colors.primary,
    textAlign: 'center',
  },
  privacyText: {
    ...textStyles.headline2,
    color: colors.quaternary,
    textAlign: 'center',
  },
  privacyLink: {
    ...textStyles.headline2,
    color: colors.buttonAccent,
  },
  button: {
    width: '100%',
    paddingVertical: sizes.l,
    backgroundColor: colors.buttonAccent,
    borderRadius: sizes.radius,
    alignItems: 'center',
  },
  buttonText: {
    ...textStyles.button,
    color: colors.white,
  },
});
