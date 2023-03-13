import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import playmarket from "../../assets/icons/playmarket.svg";
import "./index.scss";
export const Footer: FC = (): ReactElement => {
  return (
    <footer>
      <div className="container wrapper">
        <div className="content">
          <h6>Download our app</h6>
          <img src={playmarket} width="170" alt="playmarket" />
        </div>
        <div className="content">
          <h6>Support</h6>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
        </div>
        <div className="content">
          <h6>Company</h6>
          <p>Blog</p>
        </div>
      </div>
    </footer>
  );
};
