import {StyleSheet, ViewStyle} from 'react-native';
import {colors, textStyles, presets} from '../../../../theme';

interface Styles {
  accountScreen: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  accountScreen: {
    ...textStyles.headline1,
    ...presets.flexCenter,
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
