import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, SvgProps} from 'react-native-svg';
import {colors} from '../theme';

interface CustomIconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const RecordPaidIcon: React.FC<CustomIconProps> = ({
  color = colors.white,
  size = 27,
  ...props
}) => (
  <Svg
    width={size}
    height={(size * 28) / 27}
    viewBox="0 0 27 28"
    fill="none"
    {...props}>
    <G fill={color} clipPath="url(#clip0)">
      <Path d="M19.06 11.55H5.55v2.17h13.51v-2.17ZM5.49 19.45h11.07c.62-.9 1.45-1.65 2.42-2.17H5.49v2.17Z" />
      <Path d="M2.81 25.24c-.5-.01-.92-.41-.92-.91V5.51c0-.5.4-.9.9-.9h2.75v3.26h13.52V4.61h2.76c.5 0 .9.4.9.9V16.5c.66.05 1.3.19 1.89.42V5.51c0-1.54-1.26-2.79-2.81-2.79h-5.6A4.074 4.074 0 0 0 12.36 0c-1.78 0-3.27 1.14-3.84 2.72H2.81C1.26 2.72 0 3.97 0 5.51v18.82c0 1.54 1.26 2.79 2.81 2.79l13.72.02c-.39-.58-.69-1.22-.89-1.9H2.81Zm9.48-23.25c.85 0 1.55.69 1.55 1.54 0 .85-.7 1.54-1.55 1.54-.85 0-1.55-.69-1.55-1.54.01-.85.71-1.54 1.55-1.54Z" />
      <Path d="M25.53 19.85c-.93-.93-2.06-1.4-3.38-1.4-1.32 0-2.45.47-3.38 1.4-.93.93-1.4 2.06-1.4 3.38 0 1.32.47 2.45 1.4 3.38.93.93 2.06 1.4 3.38 1.4 1.32 0 2.45-.47 3.38-1.4.93-.93 1.4-2.06 1.4-3.38 0-1.32-.47-2.45-1.4-3.38Zm-3.66 5.18c-.23.23-.59.23-.82 0l-1.41-1.44s-.42-.53-.03-.88c.44-.39.87-.01.87-.01l.99.96 2.08-2.03s.43-.32.82.09c.36.37 0 .8 0 .8l-2.52 2.51h.02Z" />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Path fill={color} d="M0 0h26.93v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
