import { Container, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { Footer } from "../Footer";
import Header from "../Header";
import "./index.scss";

function Layout({ children, theme }: { children: any; theme: any }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
