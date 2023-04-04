import "./index.scss";
import profile from "../../../../app/assets/images/profile.jpg";

function Notification() {
  return (
    <div className="ntf-container">
      <div className="ntf-status"></div>
      <img src={profile} alt="" className="ntf-avatar"/>
      <div className="ntf-msg">
        <p className="ntf-msg-user"><span>Jasmina Raiymbek</span> saved your listing</p>
        <p  className="ntf-msg-date">Today at 9:42 AM</p>
      </div>
    </div>
  );
}
export default Notification;
