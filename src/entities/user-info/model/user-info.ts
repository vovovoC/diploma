import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
  import { useSelector } from "react-redux";
  import { getUserProfile } from "../../../shared/model/request";
  
  export const initialState: {
    data: {};
    isLoading: boolean;
  } = {
    data: {},
    isLoading: false
  };
  
  export const profileModel = createSlice({
    name: "profile",
    initialState,
    reducers: {
        SET_PROFILE: (state = initialState, {payload}: PayloadAction<any[]>) => {  
            state.data = {...payload};                                
        },
        SET_LOADING: (state = initialState, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
    },
  });
  const { SET_PROFILE, SET_LOADING } = profileModel.actions

  export const useProfileInfo = () =>
    useSelector(
      (state: any) => {
        return state.profileInfo;
      }
    );

    export const fetchProfileInfo = (params: any) => async (dispatch: Dispatch) => {
        dispatch(SET_LOADING(true))
        return getUserProfile(params).then((data) => {
          dispatch(SET_LOADING(false))
          return dispatch(SET_PROFILE(data as any))
        });
      }

  
  export const reducer = profileModel.reducer;