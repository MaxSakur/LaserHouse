import * as React from 'react';
import Svg, {SvgProps, Rect} from 'react-native-svg';

export const UnCheckedIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect width={11} height={11} x={0.5} y={0.5} stroke="#DADEE3" rx={1.5} />
  </Svg>
);
