import React from "react";
import { createTheme } from "@mui/material";
import { useState } from "react";
import Layout from "../../app/components/Layout";
import "./index.scss";
import {
  AnketaContent,
  FavRoomListContent,
  FavRoommateListContent,
  UserInfoContent,
  UserRoomPostContent,
  UserRoommatePostContent,
} from "../../features";
import BackButton from "../../app/components/BackButton";

const UserPostsList = () => {
  return (
    <div className="">
      <div>
        <p> Rooms </p>
        <UserRoomPostContent />
      </div>
      <div>
        <p> Roommates</p>
        <UserRoommatePostContent />
      </div>
    </div>
  );
};

const FavPostsList = () => {
  return (
    <div className="">
      <div>
        <p> Rooms </p>
        <FavRoomListContent />
      </div>
      <div>
        <p> Roommates</p>
        <FavRoommateListContent />
      </div>
    </div>
  );
};

export const ProfilePage = () => {
  const [page, setPage] = useState(0);

  const theme = createTheme();
  const contents = React.useMemo(() => {
    return [<AnketaContent />, <UserPostsList />, <FavPostsList />];
  }, []);

  const labels = ["Profile details", "My posts", "Saved posts"];

  return (
    <Layout theme={theme}>
      <div className="wrapper profile">
        <BackButton name="home" />
        <p className="page-title">My profile</p>
        <div className="profile-body">
          <div className="user-info">
            <UserInfoContent />
          </div>
          <div>
            <div className="profile-nav">
              {labels.map((label, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setPage(index)}
                    className={page === index ? "selected" : "not-selected"}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
            <div className="profile-nav-content">{contents[page]}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
