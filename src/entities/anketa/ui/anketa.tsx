import * as React from "react";
import "./index.scss";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import TelegramIcon from "@mui/icons-material/Telegram";
import { CnfDelete } from "../../../app/components/CnfDelete";
import { EditSettings } from "../../../app/components/EditSettings";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { EditAnketa } from "../../../app/components/EditAnketa";
import { Typography } from "@mui/material";

interface Props {
  data: {
    id: number;
    user_id: number;
    additional: string;
    fullname: string;
    age: number;
    gender: string;
    work: string;
    study: string;
    description: string;
    tags: string;
    phonenumber: string;
    links_to_media: string;
    image: string;
  };
  deleteData: {
    email: string;
  };
  initialValues: {
    email: string;
    password: string;
  };
  handleDelete: () => void;
  handleEdit: (values: any) => void;
}
export const Anketa = ({
  data,
  deleteData,
  handleDelete,
  handleEdit,
  initialValues
}: Props) => {
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

  console.log("here", data);
  return (
    <div className="profile">
      <div className="anketa">
        <div className="anketa-header">
          <div>Profile details</div>
          <Button
            sx={{ color: "white", backgroundColor: "transparent", p: "0" }}
            onClick={handleToggleEditAnketa}
            title="Edit anketa"
          >
            <BorderColorIcon />
          </Button>
          <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openEditAnketa}
          >
            <EditAnketa fn={handleCloseEditAnketa} />
          </Backdrop>
        </div>
        <div className="anketa-body">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{data.fullname}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{data.age}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{data.gender}</td>
              </tr>
              <tr>
                <th>Work</th>
                <td>{data.work}</td>
              </tr>
              <tr>
                <th>University</th>
                <td>{data.study}</td>
              </tr>
              <tr>
                <th>About me</th>
                <td>{data.description}</td>
              </tr>
              <tr>
                <th>Phone number</th>
                <td>{data.phonenumber}</td>
              </tr>
              <tr>
                <th>Social acc</th>
                <td className="anketa-socialmedia">
                  <ul>
                    {/* <li>
                      <InstagramIcon sx={{ mr: "2px" }} /> {data.links_to_media}
                    </li> */}
                    <li>
                      <TelegramIcon sx={{ mr: "2px" }} /> {data.links_to_media}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Photos</th>
                <td className="ankeat-photo">
                  <img
                    src={`http://159.223.21.6/images/${data.image}`}
                    alt=""
                    className="user-img"
                  />
                </td>
              </tr>
              <tr>
                <th>Lifestyle</th>
                <td className="anketa-lifestyle">
                  <ul>
                    <li>{data.additional}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="settings">
        <div className="settings-header">
          <div>Settings</div>
          <div>
            <IconButton
              sx={{
                color: "white",
              }}
              onClick={handleToggleEditSettings}
              title="Edit anketa"
            >
              <BorderColorIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
              }}
              onClick={handleToggle}
              title="Delete anketa"
            >
              <DeleteIcon />
            </IconButton>
          </div>
          <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openEditSettings}
          >
            <EditSettings fn={handleCloseEditSettings} edit={handleEdit} initialValues={initialValues}/>
          </Backdrop>
          <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CnfDelete handleDelete={handleDelete} />
          </Backdrop>
        </div>
        <div className="settings-body">
          <table>
            <tbody>
              <tr>
                <th>Email</th>
                <td>{deleteData.email}</td>
              </tr>
              <tr>
                <th>Password</th>
                <td>********</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
