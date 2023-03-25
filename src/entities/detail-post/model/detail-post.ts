import { createSlice } from "@reduxjs/toolkit";

  export const initialState: {
    data: any; 
    isLoading: boolean;
  } = {
    data: {},
    isLoading: false
  };
  
  export const detailPostModel = createSlice({
    name: "detailPost",
    initialState,
    reducers: {},
  });
 
  
  export const reducer = detailPostModel.reducer;