import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
  import { useSelector } from "react-redux";
  import { login, register } from "../../../shared/model/request";
  
  export const initialState: {
    data: {};
    isLoading: boolean
  } = {
    data: {},
    isLoading: false
  };
  
  export const authModel = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_TOKEN: (state = initialState, {payload}: PayloadAction<any[]>) => {  
            state.data = {...payload};                                
        },
        SET_LOADING: (state = initialState, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
    },
  });
  const { SET_LOADING, SET_TOKEN } = authModel.actions

  export const useCategories = () =>
    useSelector(
      (state: any) => {
        return state.auth;
      }
    );

    export const fetchLogin = (params: any) => async (dispatch: Dispatch) => {
        dispatch(SET_LOADING(true))
        return login(params).then((data) => {
          dispatch(SET_LOADING(false))
          return dispatch(SET_TOKEN(data as any))
        });
      }
      export const fetchRegister = (params: any) => async (dispatch: Dispatch) => {
        dispatch(SET_LOADING(true))
        return register(params).then((data) => {
          dispatch(SET_LOADING(false))
          return dispatch(SET_TOKEN(data as any))
        });
      } 
      

    export const useToken = () => useSelector((state: any) =>  state.auth);

  
  export const reducer = authModel.reducer;