import {StyleSheet} from 'react-native';
import {colors, sizes, textStyles} from '../../../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...textStyles.headline1,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: colors.primary,
  },
  content: {
    gap: sizes.l,
  },
  boldText: {
    fontWeight: 'bold',
  },
  dot: {
    width: sizes.m,
    height: sizes.m,
    borderRadius: 100,
    backgroundColor: colors.buttonAccent,
    marginRight: sizes.m,
    position: 'absolute',
    top: sizes.s,
  },
  textBlockHeader: {
    ...textStyles.headline2,
    color: colors.primary,
    fontWeight: '700',
  },
  textBlockContent: {
    paddingLeft: sizes.l,
    gap: sizes.l,
    position: 'relative',
  },
});
