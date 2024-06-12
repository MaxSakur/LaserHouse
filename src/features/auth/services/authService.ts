import {
  IDefaultResponse,
  // IVarificateRequest,
  IVarificateResponse,
  // ILoginRequest,
  ILoginResponse,
  // IRegisterRequest,
  IRegisterResponse,
  IRegisterRequest,
} from '../../../types/auth';

const sendVerificationCode = async (
  phone: string,
): Promise<IDefaultResponse<IVarificateResponse>> => {
  // const requestBody: IVarificateRequest = {phone};

  // const response = await api.post<IDefaultResponse<IVarificateResponse>>(
  //   '/varificate',
  //   requestBody,
  // );

  return {
    success: true,
    statusCode: 200,
    message: `Verification code was sent to ${phone}`,
    data: {
      isRegistered: false,
      code: '1234',
    },
  };
};

const login = async (
  phone: string,
): Promise<IDefaultResponse<ILoginResponse>> => {
  // const requestBody: ILoginRequest = {phone};

  // const response = await api.post<IDefaultResponse<IVarificateResponse>>(
  //   '/login',
  //   requestBody,
  // );

  return {
    success: true,
    statusCode: 200,
    message: `User with ${phone} successfully logged in`,
    data: {
      token: '1234567890',
    },
  };
};

const register = async (
  data: IRegisterRequest,
): Promise<IDefaultResponse<IRegisterResponse>> => {
  // const requestBody: IRegisterRequest = {data};

  // const response = await api.post<IDefaultResponse<IVarificateResponse>>(
  //   '/register',
  //   requestBody,
  // );

  return {
    success: true,
    statusCode: 200,
    message: `User with ${data.phone} successfully registered`,
    data: {
      token: '1234567890',
    },
  };
};

export const authService = {
  sendVerificationCode,
  login,
  register,
};
