import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizes, textStyles, presets} from '../../../../theme';

interface Styles {
  loginScreen: ViewStyle;
  container: ViewStyle;
  scrollContainer: ViewStyle;
  title: TextStyle | ViewStyle;
  loginScreenContent: ViewStyle;
  description: TextStyle;
  privacyText: TextStyle;
  privacyLink: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  disabledButton: ViewStyle;
  buttonContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  loginScreen: {
    ...textStyles.headline1,
    ...presets.flexCenter,
    flex: 1,
    padding: sizes.l,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    gap: sizes.l,
  },
  loginScreenContent: {
    gap: sizes.l,
    paddingBottom: sizes.xl,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...textStyles.title1,
    color: colors.primary,
    marginBottom: sizes.l,
    textAlign: 'center',
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
  buttonContainer: {
    width: '100%',
    gap: sizes.xl,
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    paddingVertical: sizes.l,
    backgroundColor: colors.buttonAccent,
    borderRadius: sizes.radius,
    alignItems: 'center',
    marginBottom: sizes.l,
  },
  buttonText: {
    ...textStyles.button,
    color: colors.white,
  },
  disabledButton: {
    backgroundColor: colors.quaternary,
  },
});
