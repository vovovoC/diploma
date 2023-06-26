import { ThemeProvider } from "@mui/material";
import { Footer } from "../Footer";
import Header from "../Header";
import "./index.scss";

function Layout({ children, theme }: { children: any; theme: any }) {
  console.log(localStorage.getItem("userName"))
  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "relative"}}>
        <Header userName={localStorage.getItem("userName") || ""} />
        <div style={{ minHeight: "90vh"}}>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
