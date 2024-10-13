import api from '../../../api';
import {
  IDefaultResponse,
  IVarificateResponse,
  ILoginResponse,
  IRegistrationResponse,
  IRegisterRequest,
  ILoginResult,
  IRegisterResult,
} from '../../../types/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sendVerificationCode = async (
  phone: string,
): Promise<IDefaultResponse<IVarificateResponse>> => {
  try {
    const {data, status} = await api.post<
      IDefaultResponse<IVarificateResponse>
    >('/varificate', {phone});

    return {
      success: status === 200,
      statusCode: status,
      message:
        status === 200
          ? `Verification code was sent to ${phone}`
          : 'Failed to send verification code',
      data: data?.data || null,
    };
  } catch (error) {
    console.error('sendVerificationCode error:', error);
    return {
      success: false,
      statusCode: 500,
      message: 'An error occurred while sending verification code',
      data: null,
    };
  }
};

const login = async (
  phone: string,
): Promise<IDefaultResponse<ILoginResult>> => {
  try {
    const {data, status} = await api.post<IDefaultResponse<ILoginResponse>>(
      '/login',
      {phone},
    );

    if (!data.success) {
      return {
        success: false,
        statusCode: status,
        message: data.message || 'Login failed',
        data: null,
      };
    }

    const token = data.data?.token;

    return {
      success: true,
      statusCode: status,
      message: 'Login successful',
      data: {token: token || null},
    };
  } catch (error) {
    console.error('login error:', error);
    return {
      success: false,
      statusCode: 500,
      message: 'An error occurred during login',
      data: null,
    };
  }
};

const register = async (
  reqData: IRegisterRequest,
): Promise<IDefaultResponse<IRegisterResult>> => {
  try {
    const {data, status} = await api.post<
      IDefaultResponse<IRegistrationResponse>
    >('/register', reqData);

    if (!data.success) {
      return {
        success: false,
        statusCode: status,
        message: data.message || 'Registration failed',
        data: null,
      };
    }

    const token = data.data?.token || null;

    return {
      success: true,
      statusCode: status,
      message: 'Registration successful',
      data: {token},
    };
  } catch (error) {
    console.error('register error:', error);
    return {
      success: false,
      statusCode: 500,
      message: 'An error occurred during registration',
      data: null,
    };
  }
};

const storeToken = async (token: string): Promise<IDefaultResponse<null>> => {
  try {
    await AsyncStorage.setItem('@user_token', token);
    return {
      success: true,
      statusCode: 200,
      message: 'Token stored successfully',
      data: null,
    };
  } catch (e) {
    return {
      success: false,
      statusCode: 500,
      message: 'Failed to store token',
      data: null,
    };
  }
};

const getToken = async (): Promise<IDefaultResponse<string | null>> => {
  try {
    const token = await AsyncStorage.getItem('@user_token');
    return {
      success: true,
      statusCode: 200,
      message: 'Token retrieved successfully',
      data: token !== null ? token : null,
    };
  } catch (e) {
    return {
      success: false,
      statusCode: 500,
      message: 'Failed to retrieve token',
      data: null,
    };
  }
};

const removeToken = async (): Promise<IDefaultResponse<null>> => {
  try {
    await AsyncStorage.removeItem('@user_token');
    return {
      success: true,
      statusCode: 200,
      message: 'Token removed successfully',
      data: null,
    };
  } catch (e) {
    return {
      success: false,
      statusCode: 500,
      message: 'Failed to remove token',
      data: null,
    };
  }
};

const isTokenValid = async (): Promise<IDefaultResponse<boolean>> => {
  const {data: token} = await getToken();
  return {
    success: true,
    statusCode: 200,
    message: token ? 'Token is valid' : 'Token is invalid',
    data: token ? true : false,
  };
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
