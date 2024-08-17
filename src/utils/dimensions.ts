import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension] = width < height ? [width, height] : [height, width];

// Design base width
const guidelineBaseWidth = 375;

const scale = (size: number): number => {
  const scaleFactor = shortDimension / guidelineBaseWidth;
  const scaledSize = size * scaleFactor;
  return PixelRatio.roundToNearestPixel(scaledSize);
};
const moderateScale = (size: number, factor = 1) => {
  return size + (scale(size) - size) * factor;
};

export {height, moderateScale, scale, width};
