import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, SvgProps} from 'react-native-svg';
import {colors} from '../theme';

interface CustomIconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const RecordPreviousIcon: React.FC<CustomIconProps> = ({
  color = colors.white,
  size = 25,
  ...props
}) => (
  <Svg
    width={size}
    height={(size * 28) / 25}
    viewBox="0 0 25 28"
    fill="none"
    {...props}>
    <G fill={color} clipPath="url(#clip0)">
      <Path d="M19.06 11.55H5.55v2.17h13.51v-2.17ZM5.49 19.45h11.07c.62-.9 1.45-1.65 2.42-2.17H5.49v2.17Z" />
      <Path d="M2.81 25.24c-.5-.01-.92-.41-.92-.91V5.51c0-.5.4-.9.9-.9h2.75v3.26h13.52V4.61h2.76c.5 0 .9.4.9.9V16.5c.66.05 1.3.19 1.89.42V5.51c0-1.54-1.26-2.79-2.81-2.79h-5.6A4.074 4.074 0 0 0 12.36 0c-1.78 0-3.27 1.14-3.84 2.72H2.81C1.26 2.72 0 3.97 0 5.51v18.82c0 1.54 1.26 2.79 2.81 2.79l13.72.02c-.39-.58-.69-1.22-.89-1.9H2.81Zm9.48-23.25c.85 0 1.55.69 1.55 1.54 0 .85-.7 1.54-1.55 1.54-.85 0-1.55-.69-1.55-1.54.01-.85.71-1.54 1.55-1.54Z" />
      <Path d="m25.93 20.99-1.46-1.46-2.29 2.3-2.3-2.3-1.47 1.46 2.32 2.3-2.29 2.3 1.46 1.46 2.29-2.3 2.28 2.27 1.46-1.46-2.28-2.28 2.28-2.29Z" />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Path fill={color} d="M0 0h25.93v27.14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
