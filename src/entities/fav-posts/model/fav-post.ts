import {
    createSlice,
    Dispatch,
    PayloadAction,
  } from "@reduxjs/toolkit";
  import { useSelector } from "react-redux";
import { addFavRoommatePost, addFavRoomPost, getFavRoommatePosts, getFavRoomPosts } from "../../../shared/model";

  export const initialState: {
    rooms: any,
    roommates: any
  } = {
    rooms: [],
    roommates: []
  };
  
  export const favPostListModel = createSlice({
    name: "favPostList",
    initialState,
    reducers: {
      SET_FAV_ROOM: (state = initialState, {payload}: PayloadAction<any[]>) => {     
        state.rooms = [...state.rooms, payload];                                       
      },
      SET_FAV_ROOMMATE: (state = initialState, {payload}: PayloadAction<any[]>) => {     
        state.roommates = [...state.roommates, payload];                                    
      }
    },
  });
  const { SET_FAV_ROOM,SET_FAV_ROOMMATE } = favPostListModel.actions

  export const useFavPostList = () =>
    useSelector(
      (state: any) => {
        return state.favPostList;
      }
    );

    export const getFavRoomPostList = () => {
      const userId = localStorage.getItem('user_id');
      if(!userId) return;
      return async (dispatch: Dispatch) => {
        await getFavRoomPosts(userId).then((data) => {
          dispatch(SET_FAV_ROOM(data as any))
        });
      }
    }
  
    export const getFavRoommatePostList = () => {
      const userId = localStorage.getItem('user_id');
      if(!userId) return;
      return async (dispatch: Dispatch) => {
        await getFavRoommatePosts(userId).then((data) => {
          dispatch(SET_FAV_ROOMMATE(data as any))
        });
      }
    }


    export const addFavRoomPostList = (params:any) => {
      const userId = localStorage.getItem('user_id');
      if(!userId) return;
      return async (dispatch: Dispatch) => {
        await addFavRoomPost({...params, user_id: userId}).then((data) => {
          dispatch(SET_FAV_ROOM(data as any))
        });
      }
    }
  
    export const addFavRoommatePostList = (params: any) => {
      const userId = localStorage.getItem('user_id');
      if(!userId) return;
      return async (dispatch: Dispatch) => {
        await addFavRoommatePost({...params, user_id: userId}).then((data) => {
          dispatch(SET_FAV_ROOMMATE(data as any))
        });
      }
    }
    
  export const reducer = favPostListModel.reducer;