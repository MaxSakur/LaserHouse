import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizes, textStyles, presets} from '../../../../theme';
import {ImageStyle} from 'react-native-fast-image';

interface Styles {
  loginScreen: ViewStyle;
  container: ViewStyle;
  scrollContainer: ViewStyle;
  title: TextStyle;
  loginScreenContent: ViewStyle;
  description: TextStyle;
  privacyText: TextStyle;
  privacyLink: TextStyle;
  buttonContainer: ViewStyle;
  image: ImageStyle;
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
    zIndex: -1,
  },
  privacyLink: {
    ...textStyles.headline2,
    color: colors.buttonAccent,
    zIndex: -1,
  },
  buttonContainer: {
    width: '100%',
    gap: sizes.xl,
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    height: 100,
  },
});
