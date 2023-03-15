import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
  import { useSelector } from "react-redux";
  import { login, register } from "../../../shared/model/request";
  
  export const initialState: {
    data: {};
    isLoading: boolean;
    filterData: any
  } = {
    data: {},
    isLoading: false,
    filterData: {}
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
          alert("User entered successfully")
          return dispatch(SET_TOKEN(data as any))
        });
      }
      export const fetchRegister = (params: any) => async (dispatch: Dispatch) => {
        dispatch(SET_LOADING(true))
        return register(params).then((data) => {
          alert("User created successfully")
          dispatch(SET_LOADING(false))
          return dispatch(SET_TOKEN(data as any))
        });
      } 
      
        
    // eslint-disable-next-line react-hooks/rules-of-hooks
    export const getToken = () => useSelector((state: any) =>  state.auth);

  
  export const reducer = authModel.reducer;