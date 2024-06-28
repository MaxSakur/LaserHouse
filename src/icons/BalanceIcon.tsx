import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BalanceIcon = ({color, size}: {color: string; size: number}) => (
  <Svg width={size} height={size} viewBox="0 0 24 23" fill="none">
    <Path
      fill={color}
      d="M15.2 14.4a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"
    />
    <Path
      fill={color}
      d="M23.1 8.5c0-1.1-.3-2-.9-2.6-.5-.5-1.3-.9-2.3-.9H4.4c-.4 0-.8-.4-.8-.8 0-.5.4-.9.9-.9h15.3c-.1-.6-.4-1.1-.7-1.5-.7-.5-1.6-.8-2.7-.8h-12c-.4 0-.8 0-1.2.2-.5.1-1 .4-1.3.7-.5.4-.8 1.1-.9 1.9v14.1c0 1.1.3 2 .9 2.6.6.6 1.5.9 2.6.9h15.3c1.1 0 2-.3 2.6-.9.6-.6.9-1.5.9-2.6v-1.3h-9.9c-.5 0-.9-.2-1.3-.5-.3-.3-.5-.9-.5-1.4v-2.9c0-.6.2-1 .5-1.4.3-.3.8-.5 1.3-.5h9.7V8.5Z"
    />
  </Svg>
);
