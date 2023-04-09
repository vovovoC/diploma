import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { deleteUserPost, createUserPost } from "../../../shared/model/request";
  
  export const initialState: {
    data: any[];
    isLoading: boolean;
  } = {
    data: [],
    isLoading: false
  };
  
  export const userPostListModel = createSlice({
    name: "userPosts",
    initialState,
    reducers: {
      SET_LOADING: (state = initialState, { payload }: PayloadAction<boolean>) => {
          state.isLoading = payload;
      },
  },
  });

  const { SET_LOADING } = userPostListModel.actions

  export const fetchCreateUserPost = (params: any) => async (dispatch: Dispatch) => {
    dispatch(SET_LOADING(true))
    return createUserPost(params).then((data) => {
      dispatch(SET_LOADING(false))
      console.log(data)
    });
  }
  export const fetchDeleteUserPost = (params: any) => async (dispatch: Dispatch) => {
    dispatch(SET_LOADING(true))
    return deleteUserPost(params).then((data) => {
      dispatch(SET_LOADING(false))
      console.log(data)
    });
  } 
  
  
  export const reducer = userPostListModel.reducer;