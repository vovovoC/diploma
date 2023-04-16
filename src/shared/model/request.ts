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

// accomodation
export const getAccomodationPosts = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/accomodation/list?${paramsToString(params)}`); // user post id
export const getAccomodationPostId = (id: number| string): Promise<PostDetailData[]> => axiosInstance.get(`${NEW_API_URL}/posts/accomodation/get/${id}`);
// user acc posts
export const getUserAccomodationPosts = (id: number) => axiosInstance.get(`${NEW_API_URL}/users/accomodation/${id}`);
export const createUserAccomodationPost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/posts/accomodation/create`, params);
export const editUserAccomodationPost = (id: number, params: any ) => axiosInstance.put(`${NEW_API_URL}/posts/accomodation/update/${id}`, params);
export const deleteUserAccomodationPost = ( id: number ) => axiosInstance.delete(`${NEW_API_URL}/posts/accomodation/delete/${id}`);


// roommate
export const getRoommatePosts = (params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/roommate/list?${paramsToString(params)}`);
export const getRoommatePostId = (id: number| string): Promise<PostDetailData[]> => axiosInstance.get(`${NEW_API_URL}/posts/roommate/get/${id}`);
// user roommate posts
export const getUserRoommatePosts = (id: number) => axiosInstance.get(`${NEW_API_URL}/users/roommate/${id}`);
export const createUserRoommatePost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/posts/roommate/create`, params);
export const editUserRoommatePost = ( id: number, params: any ) => axiosInstance.put(`${NEW_API_URL}/posts/roommate/update/${id}`, params);
export const deleteUserRoommatePost = ( id: number ) => axiosInstance.delete(`${NEW_API_URL}/posts/roommate/delete${id}`);

// fav roommate posts
export const getFavRoommatePosts = (user_id: number, params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/roommate/get_favourites/${user_id}`, params);
export const addFavRoommatePost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/posts/roommate/add_to_favourite`, params);
export const deleteFavRoommatePost = ( id: number ) => axiosInstance.delete(`${NEW_API_URL}/posts/roommate/delete_favourite/${id}`);

// fav acc posts
export const getFavRoomPosts = (user_id: number,params: any = {}) => axiosInstance.get(`${NEW_API_URL}/posts/accomodation/get_favourites/${user_id}`, params);
export const addFavRoomPost = ( params: any ) => axiosInstance.post(`${NEW_API_URL}/posts/accomodation/add_to_favourite`, params);
export const deleteRoomFavPost = ( params: any ) => axiosInstance.delete(`${NEW_API_URL}/posts/accomodation/delete_favourite`, params);

export const getCategories = () => axiosInstance.get(`${NEW_API_URL}/posts/categories`);
export const getUserInfo = (id: number) => axiosInstance.get(`${NEW_API_URL}/users/get/${id}`);
export const getAnketa = (id: number) => axiosInstance.get(`${NEW_API_URL}/users/get_form/${id}`);