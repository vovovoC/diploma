import { createTheme } from "@mui/material";
import Layout from "../../app/components/Layout";
import { UserPostListContent } from "../../features";

export const UserPostsPage = () => {
  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <UserPostListContent />
    </Layout>
  );
};
