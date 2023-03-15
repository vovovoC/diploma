import { createTheme } from "@mui/material";
import Layout from "../../app/components/Layout";
import { FilterContent } from "../../features/filter";

export const FilterPage = () => {
  const theme = createTheme();

  return (
    <Layout theme={theme}>
      <FilterContent />
    </Layout>
  );
};
