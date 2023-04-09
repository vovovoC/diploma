import { createTheme } from "@mui/material";
import Layout from "../../../app/components/Layout";
import { RoomAddPostContent } from "../../../features";

interface Props {
  isEdit: boolean;
}

export function RoomAddPostPage({ isEdit }: Props) {
  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <RoomAddPostContent isEdit={isEdit} />
    </Layout>
  );
}
