import {StyleSheet, ViewStyle} from 'react-native';
import {colors, textStyles, presets, sizes} from '../../../../theme';

interface Styles {
  bonusFoundsScreen: ViewStyle;
  container: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  bonusFoundsScreen: {
    ...textStyles.headline1,
    ...presets.flexCenter,
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container: {
    padding: sizes.l,
    paddingHorizontal: sizes.xxl,
  },
});
