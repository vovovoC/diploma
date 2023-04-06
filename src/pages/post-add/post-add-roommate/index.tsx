import { createTheme } from "@mui/material";
import Layout from "../../../app/components/Layout";
import { RoommateAddPostContent} from "../../../features";

export function RoommateAddPostPage() {
  const theme = createTheme();
  return (
    <Layout theme={theme}>        
      <RoommateAddPostContent/>
    </Layout>
  );
}
