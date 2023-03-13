import { axiosInstance } from './instance';

const NEW_API_URL = 'http://89.218.32.7:8080';


interface Login {
    username : string;
    password: string;
}
export const login = ( params: Login ) => axiosInstance.post(`${NEW_API_URL}/login`, params);
export const register = ( params: Login ) => axiosInstance.post(`${NEW_API_URL}/register`, params);

export const getCategories = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/categories`, params);