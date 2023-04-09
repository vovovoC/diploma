import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import logo from "../../assets/icons/logo-blue.svg";
import HeaderAvatar from "../HeaderAvatar";
import ChangePostsBtns from "../ChangePostsBtns";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="center">
        <img src={logo} alt="logo" className="app-logo"/>
        <div className="header-change-posts">
           <ChangePostsBtns/>
        </div>
        <div>
          {/* <button className="nav-button outlined" onClick={() => navigate("/login")}>Log in</button>
          <button className="nav-button contained" onClick={() => navigate("/register")}>Sign up</button> */}
          <HeaderAvatar/>
        </div>
     </header>
  );
}
export default Header;
