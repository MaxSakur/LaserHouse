import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, SvgProps} from 'react-native-svg';
import {colors} from '../theme';

interface CustomIconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const RecordHomeIcon: React.FC<CustomIconProps> = ({
  color = colors.white,
  size = 31,
  ...props
}) => (
  <Svg
    width={size}
    height={(size * 27) / 31}
    viewBox="0 0 31 27"
    fill="none"
    {...props}>
    <G fill={color} clipPath="url(#clip0)">
      <Path d="M21.459 13.608H8.627c-.98 0-1.766.797-1.766 1.766v3.175c0 .419.347.766.765.766h.368c.255 3.563 1.817 6.88 1.889 7.023l.265.552h9.902l.265-.521c.072-.133 1.603-3.154 1.838-7.054h.316a.771.771 0 0 0 .766-.766v-3.175c0-.98-.796-1.766-1.766-1.766h-.01ZM18.846 24.96h-7.463c-.418-1.01-1.266-3.287-1.46-5.635h10.29c-.173 2.542-.97 4.686-1.378 5.635h.01ZM8.79 15.538h12.506v1.848H8.79v-1.848Z" />
      <Path d="M2.89 24.91v-12.2c0-1.01.99-1.571 1.092-1.633.47-.285.796-.806.796-1.398v-2c.643 0 1.41.193 1.532.203V9.7c0 .347.06.868.306 1.164.296.337.776.5 1.092.837a3.82 3.82 0 0 1 .909-.122H9.79c-.215-.694-.654-1.378-1.256-1.746a.564.564 0 0 1-.296-.48V6.351c-1.215.02-2.828-.561-5.39-.357v3.154c0 .245-.112.49-.337.602-.96.48-1.552 1.787-1.552 2.746V24.92c0 1.092.889 1.99 1.991 1.99h4.93a24.748 24.748 0 0 1-.755-1.95L2.9 24.92l-.01-.01ZM12.25 4.738v-1.93c-3.327 0-4.573-.183-5.777-.357-1.133-.163-2.205-.316-4.696-.316v1.93c2.358 0 3.359.142 4.42.295 1.276.184 2.593.378 6.064.378h-.01ZM30.544 1.104a1.433 1.433 0 0 0-1.143-.542H18.09c-.551 0-1.031.225-1.348.623-.663.827-.398 2.144-.357 2.307l1.031 8.065h1.95l-.653-5.268h9.8l-1.879 14.353H23.99s-.112.93-.316 1.93h1.97v2.327s-.02.051-.05.051H23.02a22.085 22.085 0 0 1-.756 1.93h3.328c1.092 0 1.98-.888 1.98-1.98v-2.37c.45-.08.817-.428.878-.887l2.379-18.08c.092-.795.317-1.724-.276-2.47l-.01.01ZM28.778 4.37h-10.33l-.215-1.51a.322.322 0 0 1 .327-.368h10.096c.194 0 .347.173.326.367l-.194 1.521-.01-.01Z" />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Path fill={color} d="M.96.563h29.982V26.9H.96z" />
      </ClipPath>
    </Defs>
  </Svg>
);