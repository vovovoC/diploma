import { createTheme } from "@mui/material";
import Layout from "../../../app/components/Layout";
import { RoommateAddPostContent } from "../../../features";

interface Props {
  isEdit: boolean;
}
export function RoommateAddPostPage({ isEdit }: Props) {
  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <RoommateAddPostContent isEdit={isEdit} />
    </Layout>
  );
}
