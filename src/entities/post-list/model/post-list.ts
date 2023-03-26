import { createSlice } from "@reduxjs/toolkit";

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
    reducers: {},
  });
 
  
  export const reducer = postListModel.reducer;