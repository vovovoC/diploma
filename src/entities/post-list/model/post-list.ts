import {
    createSlice,
    Dispatch,
    PayloadAction,
  } from "@reduxjs/toolkit";
  import { useSelector } from "react-redux";

  export const initialState: {
    data: any[]; 
    isLoading: boolean;
    post: any
  } = {
    data: [],
    isLoading: false,
    post: {}
  };
  
  export const postListModel = createSlice({
    name: "postList",
    initialState,
    reducers: {
      SET_POST: (state = initialState, {payload}: PayloadAction<any[]>) => {      
        state.data = [...payload];                                    
      },
      SET_POST_LOADING: (state = initialState, { payload }: PayloadAction<boolean>) => {
        state.isLoading = payload;
      },
      SET_POST_BY_ID: (state = initialState, { payload }: PayloadAction<any[]>) => {
        state.post = {...payload};                              
      },
    },
  });

  // export const usePostList = () =>
  //   useSelector(
  //     (state: any) => {
  //       return state.postList;
  //     }
  //   );

  //   export const usePostById = () =>
  //   useSelector(
  //     (state: any) => {
  //       return state.postList;
  //     }
  //   );


    // export const getPostList = (params: any = {}) => {
      
    //   return async (dispatch: Dispatch) => {
    //     dispatch(SET_POST_LOADING(true))
    //     return getPosts(params).then((data) => {
    //       dispatch(SET_POST_LOADING(false))
    //       return dispatch(SET_POST(data as any))
    //     });
    //   }
    // }

    // export const getPostById = (params: any) => {
    //     let isloading = false
    //     return async (dispatch: Dispatch) => {
    //         // dispatch(SET_POST_LOADING(true))
    //         isloading = true
    //         return getPostId(params).then((data) => {
    //          // dispatch(SET_POST_LOADING(false))
    //          isloading = false
    //          // dispatch(SET_POST_BY_ID(data as any))
    //           return {data, isloading}
    //         });
    //       }
    // }
 
  
  export const reducer = postListModel.reducer;