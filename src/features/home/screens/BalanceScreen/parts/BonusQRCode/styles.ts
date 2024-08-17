import {StyleSheet} from 'react-native';
import {sizes, textStyles} from '../../../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes.l,
  },
  boldText: {
    fontWeight: 'bold',
  },
  description: {
    ...textStyles.headline2,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
