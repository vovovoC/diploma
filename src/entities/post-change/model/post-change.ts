import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
  import {  editUserPost, createUserPost } from "../../../shared/model/request";
  
  export const initialState: {
    data: {};
    isLoading: boolean
  } = {
    data: {},
    isLoading: false
  };
  
  export const postChangeModel = createSlice({
    name: "postChange",
    initialState,
    reducers: {
        SET_POST: (state = initialState, {payload}: PayloadAction<any[]>) => {  
            state.data = {...payload};                                
        },
        SET_LOADING: (state = initialState, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
    },
  });
  const { SET_LOADING, SET_POST } = postChangeModel.actions

    export const createNewPost = (params: any) => async (dispatch: Dispatch) => {
        dispatch(SET_LOADING(true))
        return createUserPost(params).then((data: any) => {
          dispatch(SET_LOADING(false))
          return dispatch(SET_POST(data as any))
        });
      }
      export const editPost = (params: any) => async (dispatch: Dispatch) => {
        dispatch(SET_LOADING(true))
        return editUserPost(params).then((data) => {
          dispatch(SET_LOADING(false))
          return dispatch(SET_POST(data as any))
        });
      } 
  
  export const reducer = postChangeModel.reducer;