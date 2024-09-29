import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.lh.ua',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
