import * as React from "react";
import "./index.scss";
import user from "../../../../app/assets/images/user.png";
import Backdrop from '@mui/material/Backdrop';
import Button from "@mui/material/Button";
import { EditSettings } from "../../../../app/components/EditSettings";

interface Props {
  data: any;
}

export const UserInfo = ({ data }: Props) => {
  const [openEditSettings, setOpenEditSettings] = React.useState(false);
  const handleCloseEditSettings = () => {
    setOpenEditSettings(false);
  };
  const handleToggleEditSettings = () => {
    setOpenEditSettings(!openEditSettings);
  };
  return (
    <div className="user-info">
      <div className="user-data">
        <img src={user} alt="" className="user-img"/>
        <div className="user-text">
          <p className="user-name">Madina Lastname, 24 y.o</p>
          <p className="user-job">Landlord/company/specialist</p>
          <p className="user-phone">+7 707 855 2200</p>
          <Button onClick={handleToggleEditSettings} title="Edit Profile">Edit profile</Button>
            <Backdrop
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openEditSettings}
            >
            <EditSettings fn={handleCloseEditSettings}/>
          </Backdrop>
        </div>
      </div>
    </div>
    );
};
