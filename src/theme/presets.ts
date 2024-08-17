import {ViewStyle} from 'react-native';
import {colors} from './colors';

interface Presets {
  flexCenter: ViewStyle;
  shadow: ViewStyle;
}

export const presets: Presets = {
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
};
