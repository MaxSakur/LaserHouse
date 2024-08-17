import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizes, textStyles, presets} from '../../../../theme';

interface Styles {
  balanceScreen: ViewStyle;
  container: ViewStyle;
  scrollContainer: ViewStyle;
  boldText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  balanceScreen: {
    ...textStyles.headline1,
    ...presets.flexCenter,
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container: {
    width: '100%',
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    gap: sizes.l,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
