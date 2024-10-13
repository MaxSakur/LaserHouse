import api from '../../../api';

export interface UserResponse {
  id: number;
  fullName: string;
}

export const userService = {
  getUser: async (): Promise<UserResponse | null> => {
    try {
      const response = await api.get('/user');
      const {data} = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  },
};
