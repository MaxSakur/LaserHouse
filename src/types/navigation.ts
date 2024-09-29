import {Coupon} from './coupons';

// TODO: SPLIT FOR EACH STACK

export interface IVarificateResponse {
  isRegistered?: boolean;
  code?: string;
}

export type AuthStackParamList = {
  Login: undefined;
  Verification: {phone: string; data: IVarificateResponse};
  Register: {phone: string};
};

export const AuthNavigationRoutes = {
  login: 'Login',
  verification: 'Verification',
  register: 'Register',
} as const;

export type BalanceStackParamList = {
  BalanceScreen: undefined;
  HistoryIncomeScreen: undefined;
  BonusFoundsScreen: undefined;
};

export const BalanceNavigationRoutes = {
  balance: 'BalanceScreen',
  incomeHistory: 'HistoryIncomeScreen',
  bonusFounds: 'BonusFoundsScreen',
} as const;

export const RecordsNavigationRoutes = {
  RecordsMain: 'RecordsMain',
  RecordSignUp: 'RecordSignUp',
  RecordScheduled: 'RecordScheduled',
  RecordPrevious: 'RecordPrevious',
  RecordPaid: 'RecordPaid',
  RecordHome: 'RecordHome',
} as const;

export type RecordsStackParamList = {
  [RecordsNavigationRoutes.RecordsMain]: undefined;
  [RecordsNavigationRoutes.RecordSignUp]: undefined;
  [RecordsNavigationRoutes.RecordScheduled]: undefined;
  [RecordsNavigationRoutes.RecordPrevious]: undefined;
  [RecordsNavigationRoutes.RecordPaid]: undefined;
  [RecordsNavigationRoutes.RecordHome]: undefined;
};

export type INotification = {
  id: string;
  title: string;
  date: string;
  isReaded: boolean;
  onClick: () => void;
};

export type LoggedInStackParamList = {
  Coupons: undefined;
  Records: undefined;
  Account: undefined;
  LoggedStack: undefined;
  BalanceStack: undefined;
  Notifications: {
    data: INotification[];
  };
};

export const LoggedInNavigationRoutes = {
  balance: 'BalanceStack',
  records: 'Records',
  coupons: 'Coupons',
  account: 'Account',
  notifications: 'Notifications',
  loggedStack: 'LoggedStack',
} as const;

export type RootStackParamList = AuthStackParamList & LoggedInStackParamList;

export enum CouponNavigationRoutes {
  laserEpilation = 'LaserEpilation',
  cosmetology = 'Cosmetology',
  couponDetail = 'CouponDetail',
}

export type CouponStackParamList = {
  [CouponNavigationRoutes.laserEpilation]: {activeTab: CouponNavigationRoutes};
  [CouponNavigationRoutes.cosmetology]: {activeTab: CouponNavigationRoutes};
  [CouponNavigationRoutes.couponDetail]: {
    coupon: Coupon;
    activeTab: CouponNavigationRoutes;
  };
};
