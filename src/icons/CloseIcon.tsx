import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../theme';

export const CloseIcon = ({
  color = colors.black,
  size = 16,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Path
      fill={color}
      d="M38.982 6.97a2 2 0 0 0-1.396.616L24 21.172 10.414 7.586A2 2 0 0 0 8.98 6.98a2 2 0 0 0-1.393 3.434L21.172 24 7.586 37.586a2 2 0 1 0 2.828 2.828L24 26.828l13.586 13.586a2 2 0 1 0 2.828-2.828L26.828 24l13.586-13.586a2 2 0 0 0-1.432-3.443z"
    />
  </Svg>
);
