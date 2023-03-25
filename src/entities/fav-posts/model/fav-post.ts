import { createSlice} from "@reduxjs/toolkit";
  
  export const initialState: {
    data: any[];
    isLoading: boolean;
  } = {
    data: [],
    isLoading: false
  };
  
  export const favPostListModel = createSlice({
    name: "favPosts",
    initialState,
    reducers: {},
  });
  
  export const reducer = favPostListModel.reducer;