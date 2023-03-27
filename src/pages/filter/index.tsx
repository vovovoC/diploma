import { createTheme } from "@mui/material";
import Layout from "../../app/components/Layout";
import { PostListContent, CategoryContent } from "../../features";

export const FilterPage = () => {
  const theme = createTheme();

  return (
    <Layout theme={theme}>
      <div className="wrapper">
        <CategoryContent />
        <PostListContent />
      </div>
    </Layout>
  );
};
