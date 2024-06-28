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

export type LoggedInStackParamList = {
  Balance: undefined;
  Coupons: undefined;
  Records: undefined;
  Account: undefined;
  LoggedIn: undefined;
};

export const LoggedInNavigationRoutes = {
  balance: 'Balance',
  records: 'Records',
  coupons: 'Coupons',
  account: 'Account',
} as const;

export type RootStackParamList = AuthStackParamList & LoggedInStackParamList;
