import { createTheme } from "@mui/material";
import Layout from "../../app/components/Layout";
import { RoommateDetailContent } from "../../features/post-detail";

export function RoommateDetailPage() {
  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <RoommateDetailContent />
    </Layout>
  );
}
