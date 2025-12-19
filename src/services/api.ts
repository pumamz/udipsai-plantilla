import axios from 'axios';

const token = 'nOsr9FprhOWfLEti5KGJUK6RJWL8R0Ek';
const baseURL = 'http://localhost:8090/';

const api = axios.create({
  baseURL,
  headers: {
    'access-token-udipsai': token,
  },
  timeout: 30000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
