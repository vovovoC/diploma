import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../../assets/icons/logo-green.svg";
import "./index.scss";
export const Footer: FC = (): ReactElement => {
  return (
    <footer>
      {/* <div className="container wrapper">
        <div className="content">
          <h6><img src={logo} width="30" alt="playmarket" />onys app</h6>
        </div>
        <div className="content">
          <h6>Support</h6>
          <p>SDU</p>
        </div>
        <div className="content">
          <h6>Company</h6>
          <p>Blog</p> 
        </div>
      </div> */}
      <div className="footer">
        <p>© Qonys, 2023</p>
      </div>
    </footer>
  );
};
