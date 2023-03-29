import { createTheme } from "@mui/material";
import Layout from "../../app/components/Layout";
import { PostChangeContent } from "../../features/post-change";

export function PostChangePage({ isEdit }: { isEdit: boolean }) {
  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <PostChangeContent isEdit={isEdit} />
    </Layout>
  );
}
