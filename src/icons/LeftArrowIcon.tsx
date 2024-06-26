import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {colors} from '../theme';

export const LeftArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="-6 -3  24 24" fill="none" {...props}>
    <Path
      fill={props.fill || colors.primary}
      d="M9.616.322c.256.245.384.53.384.856 0 .38-.128.598-.384.818C7.878 3.501 2.69 8.043 2.69 8.043s5.191 4.522 6.927 6.022c.264.23.384.466.384.843 0 .373-.144.615-.41.843-.24.213-.474.307-.876.307s-.644-.128-.903-.353c-1.82-1.591-5.338-4.64-7.119-6.189a1.95 1.95 0 0 1-.615-.936 1.93 1.93 0 0 1 .615-2.022C2.473 5.01 5.412 2.455 7.812.37c.156-.137.484-.313.928-.313.434 0 .73.132.876.264Z"
    />
  </Svg>
);
