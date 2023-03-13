import axios from 'axios';

const NEW_API_URL = 'http://89.218.32.7:8080';
const localStorage = global.window.localStorage;

const { CancelToken } = axios;
const source = CancelToken.source();
const auth = {
    username: '',
    password: ''
};

if (localStorage.getItem('credentials')) {
  const credentials = JSON.parse(localStorage.getItem('credentials') || '');
  auth.username = credentials.username;
  auth.password = window.atob(credentials.password);

}

export const axiosInstance = axios.create({
  baseURL: NEW_API_URL,
  timeout: 60000,
  headers: { credentials: 'same-origin' },
  auth: { ...auth },
  cancelToken: source.token
});

axiosInstance.interceptors.response.use(
  response => {
    if ('data' in response) {
      return response.data;
    }

    return response;
  },
  error => {
    console.error('Interceptor error', error, error.message);
    if (
      error.response?.status === 401 &&
      !window.location.href.includes('reset-password') &&
      !error.response?.data?.path?.includes('getAuth') &&
      window.location.pathname !== 'login'
    ) {
      source.cancel('Operation canceled by 401.');
    return Promise.reject(error);
  }
  });