import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { categoryModel } from "../../entities/category/model";



export const store = configureStore({
  reducer: combineReducers({categories: categoryModel.reducer})
});