import * as React from "react";
import { useNavigate } from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Notification from "./Notification/index";
import "./index.scss";

const settings = ["Profile", "Home", "Logout"];
const ntf = [
    {user: "", date: "", img: "", msg: ""},{},{},{},{},{},{},{},
];
const posts = [{icon: <HomeOutlinedIcon sx={{color: "#5D89FA"}}/>, name: "as a Landlord looking for a renters"},
               {icon: <PeopleAltIcon sx={{color: "#5D89FA"}}/>, name: "as Renter looking for a room"}];

function HeaderAvatar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElNtf, setAnchorElNtf] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElPost, setAnchorElPost] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenPostMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPost(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenNtfMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNtf(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClosePostMenu = () => {
    setAnchorElPost(null);
  };
  const handleCloseNtfMenu = () => {
    setAnchorElNtf(null);
  };
  return (
    <div className="header-avatar">
      <div className="add-post">
        <Box>
            <Tooltip title="Add post">
              <button onClick={handleOpenPostMenu} className="notification-btn">
                <AddIcon/>
              </button>
            </Tooltip>
            <Menu
              sx={{ mt: "55px",  
                    width: "auto",
                  }}
              anchorEl={anchorElPost}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElPost)}
              onClose={handleClosePostMenu}
            >
              <div className="menu-header add-post">
                <p>Add post</p>
              </div>
                <MenuItem onClick={handleClosePostMenu} 
                          sx={{
                            width:"330px",
                            m:"0 14px",
                            p: "6px 0", 
                            fontFamily: "poppins400", 
                            fontSize: "12px", 
                            lineHeight: "18px", 
                            letterSpacing: "0.05em",
                            display: "flex", 
                            alignItems: "baseline",
                            borderBottom: "0.4px solid #777676"
                            }}>
                            <div>{posts[0].icon}</div>
                            <p className="post-name">{posts[0].name}</p>
                </MenuItem>
                <MenuItem onClick={handleClosePostMenu} 
                          sx={{
                            width:"330px",
                            m:"0 14px",
                            p: "6px 0", 
                            fontFamily: "poppins400", 
                            fontSize: "12px", 
                            lineHeight: "18px", 
                            letterSpacing: "0.05em",
                            display: "flex", 
                            alignItems: "baseline",
                          }}>
                          <div>{posts[1].icon}</div>
                          <p className="post-name">{posts[1].name}</p>
                </MenuItem>
              </Menu>
        </Box> 
      </div>
      <div className="notifications">
        <Box sx={{overflow: "hidden"}}>
              <Tooltip title="Open nutifications">
                <button onClick={handleOpenNtfMenu} className="notification-btn">
                  <NotificationsNoneIcon/>
                  <div className="ntf-count">1</div>
                </button>
              </Tooltip>
              <Menu
                sx={{ mt: "55px", 
                      padding: "26px", 
                      width: "auto", 
                      height: "240px", 
                      overflowY: "auto",
                    }}
                id="menu-appbar"
                className="ntf-menu"
                anchorEl={anchorElNtf}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNtf)}
                onClose={handleCloseNtfMenu}
              >
                <div className="menu-header">
                    <p>Notifications</p>
                    <button>Mark all as read <div className="ntf-mark"></div></button>
                </div>
                {ntf.map((i) => (
                  <MenuItem onClick={handleCloseNtfMenu} sx={{width:"auto",p:"0"}}>
                    <Notification/>
                  </MenuItem>
                ))}
              </Menu>
        </Box>
      </div>
      <div className="user-avatar">
        <Box sx={{ flexGrow: 0, fontFamily: 'poppins400', fontSize: "16px", lineHeight: "24px", letterSpacing: "0.115em" }}>
            <Tooltip title="Open settings">
              <button onClick={handleOpenUserMenu} className="avatar-btn">
                <Avatar alt="Madina" sx={{width:"32px", height:"32px"}} src="/static/images/avatar/2.jpg" />
                <div className="avatar-name">Madina</div>
                <ExpandMoreIcon sx={{color: "black"}}/>
              </button>
            </Tooltip>
            <Menu
              sx={{ mt: "55px", padding: "26px"}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{width:"202px",margin: "14px 26px", borderBottom: "1px solid #ECECEC"}}>
                  <Typography 
                    textAlign="center" 
                    sx={{fontFamily: 'poppins400', 
                         fontSize: "16px", 
                         lineHeight: "24px", 
                         letterSpacing: "0.115em" }}>
                        {setting}
                        {setting=="Logout"?<LogoutIcon sx={{ml: "3px", width:"15px"}}/> : ""}
                        {setting=="Profile"?<div className="profile-status">Incomplete</div> : ""}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Box>
      </div>
    </div>
  );
}
export default HeaderAvatar;
