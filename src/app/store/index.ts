import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { categoryModel } from "../../entities/category/model";
import { authModel } from "../../entities/auth/model";


export const store = configureStore({
  reducer: combineReducers({
        categories: categoryModel.reducer, 
        token: authModel.reducer
    })
});