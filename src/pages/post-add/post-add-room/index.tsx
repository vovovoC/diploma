import { createTheme } from "@mui/material";
import Layout from "../../../app/components/Layout";
import { RoomAddPostContent } from "../../../features";

export function RoomAddPostPage() {
  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <RoomAddPostContent/>
    </Layout>
  );
}
