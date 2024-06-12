import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizes, textStyles} from '../../../../theme';

interface Styles {
  safeArea: ViewStyle;
  content: ViewStyle;
  contentBody: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  privacyText: TextStyle;
  privacyLink: TextStyle;
  boldText: TextStyle;
  notRegistered: ViewStyle;
  notRegisteredText: TextStyle;
  notRegisteredHighlight: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    padding: sizes.l,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    gap: sizes.l,
  },
  contentBody: {
    justifyContent: 'center',
    flex: 1,
    gap: sizes.l,
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
  boldText: {
    fontWeight: 'bold',
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
  notRegistered: {
    gap: sizes.xl,
  },
  notRegisteredText: {
    ...textStyles.headline2,
    paddingHorizontal: sizes.l,
    textAlign: 'center',
    lineHeight: 24,
  },
  notRegisteredHighlight: {
    fontWeight: 'bold',
  },
});
