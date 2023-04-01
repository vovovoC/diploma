import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

import logo from "../../app/assets/icons/logo-green.svg";
import error from "../../app/assets/images/404.png";

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <img src={logo} alt="" className="logo show" />
      <div className="body">
        <div className="error-img">
          <img src={error} alt=""/>
          <p>404 <br /> not found</p>
        </div>
        <div className="error-text">
           <p className="error-msg">Woops. Looks like this page doesn’t exist.</p>
           <p className="back-link">back to <button  onClick={() => navigate("/")}>home</button></p>
        </div>
      </div>
    </div>
  );
}
