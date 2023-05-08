import { ThemeProvider } from "@mui/material";
import { Footer } from "../Footer";
import Header from "../Header";
import "./index.scss";

function Layout({ children, theme }: { children: any; theme: any }) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "relative" }}>
        <Header userName={localStorage.getItem("userName") || ""} />
        <div>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
