const mockApiUrl = 'https://0d953788-9252-4587-acc6-aef4c44cc454.mock.pstmn.io';

export interface ILoginResponse {
  success: boolean;
  message?: string;
  code: string;
}

export const login = async (phone: string): Promise<ILoginResponse> => {
  const response = await fetch(`${mockApiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({phone}),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: ILoginResponse = await response.json();
  return data;
};

export const register = async (
  email: string,
  password: string,
): Promise<void> => {
  console.log('register', email, password);
};
