export interface IDefaultResponse<D> {
  success: boolean;
  message?: string;
  statusCode: number;
  data: D | null;
}

export interface IErrorResponse {
  message: string;
  statusCode: number;
}

export interface IVarificateRequest {
  phone: string;
}

export interface IVarificateResponse {
  isRegistered?: boolean;
  code?: string;
}

export interface ILoginRequest {
  phone: string;
}

export interface ILoginResponse {
  token: string;
}

export interface ILoginResult {
  token: string | null;
}

export interface IRegisterRequest {
  name: string;
  surname: string;
  parentName?: string;
  dob?: Date;
  phone: string;
  email: string;
  address: string;
}

export interface IRegistrationResponse {
  token: string;
}

export interface IRegisterResult {
  token: string | null;
}
export interface IRegisterResponse {
  token: string | null;
}
