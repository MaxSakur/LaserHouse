import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const RecordsIcon = ({color, size}: {color: string; size: number}) => (
  <Svg width={size} height={size} viewBox="0 0 24 23" fill="none">
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill={color}
          d="M19.837 2.8h-1.8v-.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.9h-8.2v-.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.9h-2.1c-1.7 0-3.2 1.5-3.2 3.3v13.3c0 1.8 1.5 3.2 3.2 3.2h15.7c1.8 0 3.2-1.5 3.2-3.2V6.1c.1-1.8-1.4-3.3-3.2-3.3Zm-15.7 1.8h15.7c.8 0 1.4.7 1.4 1.4v1.8h-18.5V6.1c0-.8.7-1.5 1.4-1.5Zm15.7 16.3h-15.7c-.8 0-1.4-.7-1.4-1.4V9.7h18.6v9.8c0 .7-.7 1.4-1.5 1.4Zm-1.2-7.6c0 .5-.4.9-.9.9h-11.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h11.6c.5 0 .9.4.9.9Zm-4 4c0 .5-.4.9-.9.9h-7.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h7.6c.5 0 .9.4.9.9Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.937 0h22.2v22.7H.937z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M.937 1h22.2v21.7H.937z" />
      </ClipPath>
    </Defs>
  </Svg>
);
