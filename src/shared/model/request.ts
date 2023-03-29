import { axiosInstance } from './instance';

const NEW_API_URL = 'http://89.218.32.7:8080';


interface Login {
    username : string;
    password: string;
}
interface Register {
    username : string;
    email: string;
    password: string;
}

const paramsToString = (params: any = {}): string => {
    let str = ''
    Object.keys(params).forEach((key: string) => {
        if(params[key]) {
            str += `${key}=${params[key]}&`
        }   
    })
    return str.slice(0,-1)
}

export const login = ( params: Login ) => axiosInstance.post(`${NEW_API_URL}/users/login`, params);
export const register = ( params: Register ) => axiosInstance.post(`${NEW_API_URL}/users/register`, params);

export const getPosts = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/list?${paramsToString(params)}`);
export const getPostId = (id: number| string) => axiosInstance.get(`${NEW_API_URL}/posts/list${id}`);
export const getCategories = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/categories`, params);
export const getUserProfile = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/categories`, params);
export const getUserInfo = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/user-info`, params);
export const getAnketa = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/user-info`, params);