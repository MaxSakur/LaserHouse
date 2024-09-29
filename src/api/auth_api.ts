import api from '.';

const authApi = {
  verificate: async (phone: string) => {
    try {
      const res = api.post('/auth/verificate', {phone});
      console.log(res);
      return res;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};

export default authApi;
