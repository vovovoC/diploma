import { createSlice } from "@reduxjs/toolkit";
  
  export const initialState: {
    data: {};
    isLoading: boolean;
  } = {
    data: {},
    isLoading: false
  };
  
  export const anketaModel = createSlice({
    name: "anketa",
    initialState,
    reducers: {},
  });

  export const reducer = anketaModel.reducer;