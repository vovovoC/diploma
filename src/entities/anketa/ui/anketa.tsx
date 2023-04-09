import * as React from "react";
import "./index.scss";
import user from "../../../app/assets/images/user.png";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { CnfDelete } from "../../../app/components/CnfDelete";
import { EditSettings } from "../../../app/components/EditSettings";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from "@mui/material/Button";
import { EditAnketa } from "../../../app/components/EditAnketa";
import { Typography } from "@mui/material";

export const Anketa = () => {
  const [open, setOpen] = React.useState(false);
  const [openEditAnketa, setOpenEditAnketa] = React.useState(false);
  const [openEditSettings, setOpenEditSettings] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseEditAnketa = () => {
    setOpenEditAnketa(false);
  };
  const handleCloseEditSettings = () => {
    setOpenEditSettings(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleToggleEditAnketa = () => {
    setOpenEditAnketa(!openEditAnketa);
  };
  const handleToggleEditSettings = () => {
    setOpenEditSettings(!openEditSettings);
  };
  return (
    <div className="profile">
      <div className="anketa">
        <div className="anketa-header">
          <div>Profile details</div>
          <Button sx={{color: "white", backgroundColor: "transparent", p: "0"}} onClick={handleToggleEditAnketa} title="Edit anketa"><BorderColorIcon/></Button>
            <Backdrop
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openEditAnketa}
            >
            <EditAnketa fn={handleCloseEditAnketa}/>
          </Backdrop>
        </div>
        <div className="anketa-body">
        <table>
          <tr>
            <th>Name</th>
            <td>Madina</td>
          </tr>
          <tr>
            <th>Lastname</th>
            <td>Alzhan</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>24</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Work</th>
            <td>Manager</td>
          </tr>
          <tr>
            <th>University</th>
            <td>Al-Farabi</td>
          </tr>
          <tr>
            <th>About me</th>
            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</td>
          </tr>
          <tr>
            <th>Phone number</th>
            <td>+7 707 855 2200</td>
          </tr>
          <tr>
            <th>Social acc</th>
            <td className="anketa-socialmedia">
              <ul>
                <li><InstagramIcon sx={{mr: "2px"}}/> @madinkalzh</li>
                <li><TelegramIcon  sx={{mr: "2px"}}/> @madinkalzh</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Photos</th>
            <td className="ankeat-photo"><img src={user} alt="" className="user-img"/></td>
          </tr>
          <tr>
            <th>Lifestyle</th>
            <td className="anketa-lifestyle">
              <ul>
                <li>extroverted</li>
                <li>artist/creative</li>
                <li>health/wealness</li>
              </ul>
            </td>
          </tr>
        </table>
        </div>
      </div>
      <div className="settings">
        <div className="settings-header">
            <div>Settings</div>
            <Button sx={{color: "white", backgroundColor: "transparent", p: "0"}} onClick={handleToggleEditSettings} title="Edit anketa"><BorderColorIcon/></Button>
            <Backdrop
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openEditSettings}
            >
            <EditSettings fn={handleCloseEditSettings}/>
          </Backdrop>
        </div>
        <div className="settings-body">
            <table>
                <tr>
                  <th>Email</th>
                  <td>madinkalzh@mail.ru</td>
                </tr>
                <tr>
                  <th>Password</th>
                  <td>********</td>
                </tr>
                <tr className="delete-acc">
                
                  <Typography sx={{color: "#D50000", textDecoration: "underline",
                          backgroundColor: "transparent", p: "0", textTransform: "uppercase", fontSize: {xs: "10px",s: "10px", md: "14px"}}} onClick={handleToggle}>Delete account</Typography>
                  <Backdrop
                    sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={open}
                    onClick={handleClose}
                  >
                    <CnfDelete/>
                  </Backdrop>
                 
                </tr>
            </table>
        </div>
      </div>
    </div>);
};
