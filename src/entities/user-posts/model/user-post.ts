import { createSlice} from "@reduxjs/toolkit";
  
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
    reducers: {},
  });
  
  export const reducer = userPostListModel.reducer;