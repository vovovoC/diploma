import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { categoryModel } from "../../entities/category/model";
import { authModel } from "../../entities/auth/model";
import { postListModel } from "../../entities/post-list/model";
import { profileModel } from "../../entities/user-info/model/user-info";
import { anketaModel } from "../../entities/anketa/model";
import { favPostListModel } from "../../entities/fav-posts/model";
import { detailPostModel } from "../../entities/detail-post/model/detail-post";


export const store = configureStore({
  reducer: combineReducers({
        categories: categoryModel.reducer, 
        token: authModel.reducer,
        postList: postListModel.reducer,
        profileInfo: profileModel.reducer,
        anketa: anketaModel.reducer,
        favPostList: favPostListModel.reducer,
        detailPost: detailPostModel.reducer
    })
});