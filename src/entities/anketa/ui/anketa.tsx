import "./index.scss";
import { useState } from "react";
import user from "../../../app/assets/images/user.png";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { CnfDelete } from "../../../app/components/CnfDelete";

export const Anketa = () => {
  return (
    <div className="profile">
      <div className="anketa">
        <div className="anketa-header">
          <div>Profile details</div>
          <button title="Edit anketa" className="edit-btn"><BorderColorIcon/></button>
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
            <button title="Edit settings" className="edit-btn"><BorderColorIcon/></button>
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
                  <th><button title="Delete account">Delete account</button></th>
                </tr>
            </table>
        </div>
      </div>
    </div>);
};
