export type RootStackParamList = {
  Login: undefined;
  Verification: {phone: string; code: string};
  Register: {phone: string};
};
