import api from '../../../api';
import {AppDispatch} from '../../../store';
import {addNotification} from '../../../store/notificationSlice';
import {setFullName, setToken} from '../../../store/tokenUserSlice';
import {
  IDefaultResponse,
  IVarificateResponse,
  IRegistrationResponse,
  IRegisterRequest,
  IRegisterResult,
} from '../../../types/auth';

const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.startsWith('380')) {
    return cleaned.slice(2);
  }
  if (cleaned.startsWith('48')) {
    return cleaned.slice(2);
  }

  return cleaned;
};

export const checkEquilCode = async (
  phone: string,
  code: string,
  dispatch: AppDispatch,
): Promise<'show_registration' | 'proceed_to_main' | 'error'> => {
  try {
    const formattedPhone = formatPhoneNumber(phone);

    const {data, status} = await api.get<IDefaultResponse<IVarificateResponse>>(
      `/user/${formattedPhone}/${code}`,
    );

    if (status === 200 && data.success) {
      if (!data.data) {
        return 'show_registration';
      }

      const {token, name} = data.data;
      dispatch(setToken(token));
      dispatch(setFullName(name));

      // Переход на главный экран
      return 'proceed_to_main';
    }

    // Если success === false, показываем уведомление
    dispatch(
      addNotification({
        id: new Date().toISOString(),
        title: 'Ошибка',
        body: data.message || 'Неверный код. Попробуйте снова.',
      }),
    );

    return 'error';
  } catch (error) {
    console.error('checkEquilCode error:', error);

    dispatch(
      addNotification({
        id: new Date().toISOString(),
        title: 'Ошибка',
        body: 'Произошла ошибка при проверке кода. Попробуйте позже.',
      }),
    );

    return 'error';
  }
};

const sendVerificationCode = async (
  phone: string,
): Promise<IDefaultResponse<IVarificateResponse>> => {
  const formattedPhone = formatPhoneNumber(phone);
  console.log('Formatted phone:', formattedPhone);
  try {
    const {status} = await api.get<IDefaultResponse<IVarificateResponse>>(
      `/user/${formattedPhone}`,
    );

    if (status === 200) {
      return {
        success: true,
        statusCode: 200,
        message: `Verification code sent to ${formattedPhone}`,
        data: null,
      };
    } else {
      return {
        success: false,
        statusCode: status,
        message: 'Failed to send verification code',
        data: null,
      };
    }
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

export const authService = {
  sendVerificationCode,
  checkEquilCode,
  register,
};
