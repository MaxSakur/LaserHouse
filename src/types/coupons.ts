import {Source} from 'react-native-fast-image';

export interface Coupon {
  path: Source;
  couponID: number;
  label: string;
  dueDate: string;
  description: string;
  warningText: string;
}
