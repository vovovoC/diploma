import { createTheme } from "@mui/material";
import Layout from "../../app/components/Layout";
import {
  AnketaContent,
  FavPostListContent,
  UserInfoContent,
  UserPostListContent,
} from "../../features";

export const UserProfilePage = () => {
  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <UserInfoContent />
      <AnketaContent />
      <UserPostListContent />
      <FavPostListContent />
    </Layout>
  );
};
