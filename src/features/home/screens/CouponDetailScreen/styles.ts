import {StyleSheet} from 'react-native';
import {colors, sizes, textStyles} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes.md,
    backgroundColor: colors.white,
    marginTop: sizes.s / 2,
  },
  image: {
    width: '100%',
    height: sizes.couponHeight,
  },
  label: {
    ...textStyles.couponTitle,
    paddingBottom: sizes.l,
  },
  description: {
    ...textStyles.body1,
    paddingVertical: sizes.l,
  },
  warningText: {
    ...textStyles.body1,
    color: colors.tertiary,
  },
});
