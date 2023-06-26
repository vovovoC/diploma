import * as React from "react";
import { useNavigate } from "react-router-dom";
import reverse_icon from "src/app/assets/icons/reverse.svg";
import home_pointer_icon from "src/app/assets/icons/iconRoom.svg";
import user_pointer_icon from "src/app/assets/icons/iconUser.svg";
import "./index.scss";

function ChangePostsBtns() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({rotate: false, change: false});
  
  const animate = () => {
    setState({rotate: true, change: !state.change});
    setTimeout(() => setState({rotate: false, change: !state.change}), 1000);
    let path = state.change ? "/posts/landlord": "/posts/renter";
    navigate(path);
  }

  return (
    <div className="reverse">
      <button className="outlined reverse-butt" disabled><img src={state.change ? user_pointer_icon : home_pointer_icon} alt="" /></button>
      <img src={reverse_icon} className={state.rotate ? "rotate" : ""} alt="" />
      <button className="reverse-butt not-active center"  onClick = {animate}><img src={state.change ? home_pointer_icon : user_pointer_icon} alt="" /><span>{state.change ? "find a room...": "find a renter..."}</span></button>
    </div>
  );
}
export default ChangePostsBtns;
