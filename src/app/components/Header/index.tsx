import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import logo from "../../assets/icons/logo-blue.svg";
import reverse_icon from "../../assets/icons/reverse.svg";
import home_pointer_icon from "../../assets/icons/home-pointer.svg";
import user_pointer_icon from "../../assets/icons/user-pointer.svg";

function Header() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({rotate: false, change: false});
  
  const animate = () => {
    setState({rotate: true, change: !state.change});
    setTimeout(() => setState({rotate: false, change: !state.change}), 1000);
    
  }
  return (
    <header className="center">
        <img src={logo} alt="logo" className="app-logo"/>
        <div className="reverse">
          <button className="outlined reverse-butt" disabled><img src={state.change ? home_pointer_icon : user_pointer_icon} alt="" /></button>
          <img src={reverse_icon} className={state.rotate ? "rotate" : ""} alt="" />
          <button className="reverse-butt not-active center"  onClick = {animate}><img src={state.change ?user_pointer_icon : home_pointer_icon} alt="" /><span>find a room...</span></button>
        </div>
        <div>
          <button className="nav-button outlined" onClick={() => navigate("/login")}>Log in</button>
          <button className="nav-button contained" onClick={() => navigate("/register")}>Sign up</button>
        </div>
     </header>
  );
}
export default Header;
