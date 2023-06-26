import { PostDetailData } from '../types';
import { axiosInstance } from './instance';

const NEW_API_URL = 'http://159.223.21.6:5000';


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

interface LoginData {
    token: string;
    id: number;
}
export const login = ( params: Login ):Promise<LoginData> => axiosInstance.post(`${NEW_API_URL}/users/login`, params);
export const register = ( params: Register ):Promise<LoginData> => axiosInstance.post(`${NEW_API_URL}/users/register`, params);
export const resetPassword = ( params: ResetPassword ):Promise<LoginData>  => axiosInstance.post(`${NEW_API_URL}/users/reset-pass`, params);
export const deleteUser = ( params: { user_id: number} ) => axiosInstance.post(`${NEW_API_URL}/users/delete_user`, params);

// accomodation
export const getAccomodationPosts = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/accomodation/posts?${paramsToString(params)}`); // user post id
export const getAccomodationPostId = (id: number| string): Promise<PostDetailData[]> => axiosInstance.get(`${NEW_API_URL}/accomodation/posts/${id}`);
// user acc posts
export const getUserAccomodationPosts = (id: number, params: any) => axiosInstance.get(`${NEW_API_URL}/users/accomodation/${id}`, params);
export const createUserAccomodationPost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/accomodation/posts`, params);
export const editUserAccomodationPost = (id: number, params: any ) => axiosInstance.put(`${NEW_API_URL}/accomodation/posts/${id}`, params);
export const deleteUserAccomodationPost = ( id: number ) => axiosInstance.delete(`${NEW_API_URL}/accomodation/posts/${id}`);


// roommate
export const getRoommatePosts = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/roommate/posts?${paramsToString(params)}`);
export const getRoommatePostId = (id: number| string): Promise<PostDetailData[]> => axiosInstance.get(`${NEW_API_URL}/roommate/posts/${id}`);
// user roommate posts
export const getUserRoommatePosts = (id: number, params: any) => axiosInstance.get(`${NEW_API_URL}/users/roommate/${id}`, params);
export const createUserRoommatePost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/roommate/posts`, params);
export const editUserRoommatePost = ( id: number, params: any ) => axiosInstance.put(`${NEW_API_URL}/roommate/posts/${id}`, params);
export const deleteUserRoommatePost = ( id: number ) => axiosInstance.delete(`${NEW_API_URL}/roommate/posts${id}`);

// fav roommate posts
export const getFavRoommatePosts = (user_id: number | string, params: any = {}) => axiosInstance.get(`${NEW_API_URL}/roommate/favourites/${user_id}`, params);
export const addFavRoommatePost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/roommate/favourites/add`, params);
export const deleteFavRoommatePost = ( id: number ) => axiosInstance.delete(`${NEW_API_URL}/roommate/favourites/delete/${id}`);

// fav acc posts
export const getFavRoomPosts = (user_id: number | string,params: any = {}) => axiosInstance.get(`${NEW_API_URL}/accomodation/favourites/${user_id}`, params);
export const addFavRoomPost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/accomodation/favourites/add`, params);
export const deleteRoomFavPost = ( params: any ) => axiosInstance.delete(`${NEW_API_URL}/accomodation/posts/delete_favourite`, params);

export const getCategories = () => axiosInstance.get(`${NEW_API_URL}/accomodation/categories`);
export const getUserInfo = (id: number | string):Promise<any> => axiosInstance.get(`${NEW_API_URL}/users/user/${id}`);
export const editMyProfile = (id: number|string, params: any) => axiosInstance.put(`${NEW_API_URL}/users/form/${id}`, params);
export const getAnketa = (id: number) => axiosInstance.get(`${NEW_API_URL}/users/form/${id}`);
export const editAnketa = (id: number| string, params: any) => axiosInstance.put(`${NEW_API_URL}/users/user/${id}`, params);

export const addRating = (id: number |string, params: any) => axiosInstance.get(`${NEW_API_URL}/rate`, params);
export const editRating = (id: number| string, params: any) => axiosInstance.put(`${NEW_API_URL}/rate`, params);