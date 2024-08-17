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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      isRegistered: true,
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

const storeToken = async (token: string) => {
  console.log('storeToken', token);
  try {
    await AsyncStorage.setItem('@user_token', token);
  } catch (e) {
    // saving error
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@user_token');
    return token !== null ? token : null;
  } catch (e) {
    // error reading value
    return null;
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('@user_token');
  } catch (e) {
    // remove error
  }
};

const isTokenValid = async (): Promise<boolean> => {
  // const response = await api.get<IDefaultResponse<IVarificateResponse>>(
  //   '/validate',
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   },
  // );
  const token = await getToken();
  return token ? true : false;
};

export const authService = {
  sendVerificationCode,
  login,
  register,
  getToken,
  removeToken,
  storeToken,
  isTokenValid,
};
