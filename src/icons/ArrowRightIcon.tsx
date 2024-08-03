import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '../theme';

interface CustomIconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const ArrowRightIcon: React.FC<CustomIconProps> = ({
  color = colors.black,
  size = 8,
  ...props
}) => (
  <Svg
    width={size}
    height={(size * 15) / 8} // Сохранение пропорций исходного SVG
    viewBox="0 0 8 15"
    fill="none"
    {...props}>
    <Path
      fill={color}
      d="M7.44 6.207 2.08 1.104a1.07 1.07 0 0 0-.775-.323c-.259 0-.517.065-.71.259a1.07 1.07 0 0 0-.324.775c0 .323.13.581.323.775l5.168 4.909-5.168 4.909c-.194.194-.323.452-.323.71 0 .259.13.582.323.776.194.194.452.258.71.258.324 0 .582-.13.776-.323L7.44 8.791c.258-.259.388-.517.517-.84a2.447 2.447 0 0 0 0-.969c-.065-.323-.259-.517-.517-.775Z"
    />
  </Svg>
);
