import {
  ILoginResponse,
  login as apiLogin,
  register as apiRegister,
} from '../../../api/auth';

export const login = async (phone: string): Promise<ILoginResponse> => {
  return apiLogin(phone);
};

export const register = async (
  email: string,
  password: string,
): Promise<void> => {
  return apiRegister(email, password);
};

export const authService = {
  login,
  register,
};
