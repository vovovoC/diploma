import * as React from "react";
import "./index.scss";
import logo from "../../assets/icons/logo-blue.svg";
import HeaderAvatar from "../HeaderAvatar";
import ChangePostsBtns from "../ChangePostsBtns";

function Header({ userName }: { userName: string }) {
  return (
    <header className="center">
      <img src={logo} alt="logo" className="app-logo" />
      <div className="header-change-posts">
        <ChangePostsBtns />
      </div>
      <div>
        <HeaderAvatar userName={userName} />
      </div>
    </header>
  );
}
export default Header;
