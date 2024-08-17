import axios from 'axios';

const api = axios.create({
  baseURL: 'https://0d953788-9252-4587-acc6-aef4c44cc454.mock.pstmn.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
