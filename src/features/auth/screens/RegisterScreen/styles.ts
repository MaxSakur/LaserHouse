import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizes, textStyles, presets} from '../../../../theme';

interface Styles {
  registerScreen: ViewStyle;
  personalData: ViewStyle;
  inputsSection: ViewStyle;
  input: TextStyle;
  focusedInput: ViewStyle;
  inputsSectionTitle: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  registerScreen: {
    ...textStyles.headline1,
    ...presets.flexCenter,
    flex: 1,
    padding: sizes.l,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
  inputsSection: {
    width: '100%',
    gap: sizes.xl,
  },
  focusedInput: {
    backgroundColor: colors.uiBackground,
    borderColor: colors.white,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.quaternary,

    padding: sizes.l,
    borderRadius: sizes.radius,
  },
  inputsSectionTitle: {
    ...textStyles.title1,
    color: colors.primary,
    textAlign: 'center',
  },
  personalData: {
    width: '100%',
    gap: sizes.xl,
    justifyContent: 'center',
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