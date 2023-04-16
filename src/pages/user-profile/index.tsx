import { createTheme } from "@mui/material";
import { useState } from "react";
import Layout from "../../app/components/Layout";
import "./index.scss";
import {
  UserAnketaContent,
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

const contents = [<UserAnketaContent />, <UserPostsList />];
export const UserProfilePage = () => {
  const [page, setPage] = useState(0);
  const [openDelete, setOpenDelete] = useState(false);

  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <div className="wrapper userprofile">
        <BackButton name="home" />
        <div className="userprofile-nav">
          <div
            onClick={() => setPage(0)}
            className={page === 0 ? "selected" : "not-selected"}
          >
            About author
          </div>
          <div
            onClick={() => setPage(1)}
            className={page === 1 ? "selected" : "not-selected"}
          >
            Listings
          </div>
        </div>
        <div className="userprofile-body">{contents[page]}</div>
      </div>
    </Layout>
  );
};
