import { PostDetailData } from '../types';
import { axiosInstance } from './instance';

const NEW_API_URL = 'http://159.223.21.6';


interface Login {
    email : string | null;
    password: string | null;
}
interface Register {
    username : string;
    email: string;
    password: string;
}

interface ResetPassword {
    user_id : number;
    old_pass: string;
    new_pass: string;
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
export const resetPassword = ( params: ResetPassword ) => axiosInstance.post(`${NEW_API_URL}/users/reset-pass`, params);
export const deleteUser = ( params: { user_id: number} ) => axiosInstance.post(`${NEW_API_URL}/users/delete_user`, params);

export const getAccomodationPosts = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/accomodation/list?${paramsToString(params)}`);
export const getAccomodationPostId = (id: number| string): Promise<PostDetailData[]> => axiosInstance.get(`${NEW_API_URL}/posts/accomodation/get/${id}`);

export const getRoommatePosts = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/roommate/list?${paramsToString(params)}`);
export const getRoommatePostId = (id: number| string): Promise<PostDetailData[]> => axiosInstance.get(`${NEW_API_URL}/posts/roommate/get/${id}`);


export const getFavPosts = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/get_favorites`, params);
export const addFavPost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/posts/add_to_favorite`, params);
export const deleteFavPost = ( params: any ) => axiosInstance.delete(`${NEW_API_URL}/posts/delete_favourite`, params);

export const getUserPosts = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/get_favorites`, params);
export const getUserPost = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/get_favorites`, params);
export const createUserPost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/posts/accomodation/create`, params);
export const editUserPost = ( params: any ) => axiosInstance.put(`${NEW_API_URL}/posts/create`, params);
export const deleteUserPost = ( params: any ) => axiosInstance.delete(`${NEW_API_URL}/posts/delete_favourite`, params);

export const createRommatePost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/posts/roommate/create`, params);
export const editRommatePost = ( params: any ) => axiosInstance.put(`${NEW_API_URL}/posts/create`, params);
export const deleteRommatePost = ( params: any ) => axiosInstance.delete(`${NEW_API_URL}/posts/delete_favourite`, params);

export const getCategories = () => axiosInstance.get(`${NEW_API_URL}/posts/categories`);

export const getUserProfile = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/categories`, params);
export const getUserInfo = (id: number) => axiosInstance.get(`${NEW_API_URL}/users/get/${id}`);
export const getAnketa = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/user-info`, params);