import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ErrorIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#FF1744"
      d="M8.921 16c4.387 0 8.008-3.62 8.008-8S13.3 0 8.913 0C4.534 0 .921 3.62.921 8s3.62 8 8 8Zm0-6.677c-.456 0-.72-.255-.735-.72l-.108-3.86c-.016-.48.325-.813.835-.813.495 0 .86.34.844.82l-.124 3.853c-.016.472-.271.72-.712.72Zm0 2.677c-.526 0-.96-.38-.96-.89s.426-.89.96-.89c.526 0 .952.38.952.89 0 .519-.434.89-.952.89Z"
    />
  </Svg>
);
