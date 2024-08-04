import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizes, textStyles} from '../../../../theme';

interface Styles {
  container: ViewStyle;
  registerScreen: ViewStyle;
  personalData: ViewStyle;
  inputsSection: ViewStyle;
  input: TextStyle;
  focusedInput: ViewStyle;
  inputsSectionTitle: TextStyle;
  modalContentHeader: TextStyle;
  modalContentText: TextStyle;
  button: ViewStyle;
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  registerScreen: {
    ...textStyles.headline1,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-start',
    padding: sizes.l,
    gap: sizes.xl,
    borderRadius: sizes.radius,
  },
  inputsSection: {
    width: '100%',
    gap: sizes.l,
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
    ...textStyles.sectionLabel,
    paddingHorizontal: sizes.l,
    color: colors.primary,
  },
  personalData: {
    width: '100%',
    gap: sizes.xl,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    paddingVertical: sizes.l,
  },
  button: {
    paddingVertical: sizes.l,
    backgroundColor: colors.buttonAccent,
    borderRadius: sizes.radius,
    alignItems: 'center',
  },
  modalContentHeader: {
    ...textStyles.title2,
    textAlign: 'center',
  },
  modalContentText: {
    ...textStyles.body1,
  },
  buttonText: {
    ...textStyles.button,
    color: colors.white,
  },
});
