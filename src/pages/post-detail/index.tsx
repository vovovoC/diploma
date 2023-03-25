import { createTheme } from "@mui/material";
import Layout from "../../app/components/Layout";
import { PostDetailContent } from "../../features";

export function PostDetailPage() {
  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <PostDetailContent />
    </Layout>
  );
}
