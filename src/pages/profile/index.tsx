import { createTheme } from "@mui/material";
import { useState } from "react";
import Layout from "../../app/components/Layout";
import "./index.scss";
import {
  AnketaContent,
  FavPostListContent,
  UserInfoContent,
  UserPostListContent,
} from "../../features";
import BackButton from "../../app/components/BackButton";

const contents = [<AnketaContent/>, <UserPostListContent/>, <FavPostListContent />]
export const ProfilePage = () => {
  const [page, setPage] = useState(0);

  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <div className="wrapper profile">
        <BackButton name="home"/>
        <p className="page-title">My profile</p>
        <div className="profile-body">
            <div className="user-info">
              <UserInfoContent />
            </div>
            <div>
              <div className="profile-nav">
                  <div onClick={() => setPage(0)} className={ page === 0 ? "selected" : "not-selected"}>Profile details</div>
                  <div onClick={() => setPage(1)} className={ page === 1 ? "selected" : "not-selected"}>My posts</div>
                  <div onClick={() => setPage(2)} className={ page === 2 ? "selected" : "not-selected"}>Saved posts</div>
              </div>
              <div className="profile-nav-content">
                {contents[page]}
              </div>
            </div>
            
        </div>
      </div>
    </Layout>
  );
};
