import "./index.scss";
import user from "../../../../app/assets/images/user.png";
interface Props {
  data: {
    email: string;
    firstname: string;
    id: number;
    username: string;
    nickname: string;
    password: string;
  };
  edit: any;
  isLoading: boolean;
}

export const UserInfo = ({ data, edit, isLoading }: Props) => {
  return (
    <div className="user-info">
      <div className="user-data">
        <img src={user} alt="" className="user-img" />
        <div className="user-text">
          <p className="user-name">{data.username}</p>
          <p className="user-job">{data.email}</p>
        </div>
      </div>
    </div>
  );
};
