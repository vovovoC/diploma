import {
    createSlice,
    Dispatch,
    PayloadAction,
  } from "@reduxjs/toolkit";
  import { useSelector } from "react-redux";
import { getUserInfo } from "../../../shared/model";

  export const initialState: {
    data: any
  } = {
    data: []
  };
  
  export const saveModel = createSlice({
    name: "user",
    initialState,
    reducers: {
      SET_USER: (state = initialState, {payload}: PayloadAction<any[]>) => {     
        state.data = [...payload];                                       
      }
    },
  });
  const { SET_USER } = saveModel.actions

  export const useUserInfo = () =>
    useSelector(
      (state: any) => {
        return state.user[0];
      }
    );

    export const  userInfo = () => {
      const userId = localStorage.getItem('user_id');
      if(!userId) return;
      return async (dispatch: Dispatch) => {
        await getUserInfo(userId).then((data) => {
          localStorage.setItem('userName', `${data?.firstName} ${data?.lastName}`)
          dispatch(SET_USER(data as any))
        });
      }
    }
  
    export const setUser = (obj: any) => ({
      type: 'SET_USER',
      payload: {...obj}
    })
 
  
  export const reducer = saveModel.reducer;