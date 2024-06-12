import {IVarificateResponse} from './auth';

export type RootStackParamList = {
  Login: undefined;
  Verification: {phone: string; data: IVarificateResponse | null};
  Register: {phone: string};
};
