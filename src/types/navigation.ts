export interface IVarificateResponse {
  isRegistered: boolean;
  code: string;
}

export type AuthStackParamList = {
  Login: undefined;
  Verification: {phone: string; data: IVarificateResponse | null};
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

export type LoggedInStackParamList = {
  Coupons: undefined;
  Records: undefined;
  Account: undefined;
  LoggedStack: undefined;
  BalanceStack: undefined;
};

export const LoggedInNavigationRoutes = {
  balance: 'BalanceStack',
  records: 'Records',
  coupons: 'Coupons',
  account: 'Account',
  loggedStack: 'LoggedStack',
} as const;

export type RootStackParamList = AuthStackParamList & LoggedInStackParamList;
