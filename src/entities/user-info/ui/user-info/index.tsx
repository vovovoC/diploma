import "./index.scss";
import user from "../../../../app/assets/images/user.png";

interface Props {
  data: any;
}

export const UserInfo = ({ data }: Props) => {
  
  return (
    <div className="user-info">
      <div className="user-data">
        <img src={user} alt="" className="user-img"/>
        <div className="user-text">
          <p className="user-name">Madina Lastname, 24 y.o</p>
          <p className="user-job">Landlord/company/specialist</p>
          <p className="user-phone">+7 707 855 2200</p>
        </div>
        <button>Edit profile</button>
      </div>
    </div>
    );
};
