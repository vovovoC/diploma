import * as React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./index.scss";

const settings = ["Profile", "Home", "Messages", "Logout"];
function HeaderAvatar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="header-avatar">
      <div className="notification-btn">
        <NotificationsNoneIcon/>
      </div>
      <div className="user-avatar">
        <Box sx={{ flexGrow: 0, fontFamily: 'poppins400', fontSize: "16px", lineHeight: "24px", letterSpacing: "0.115em" }}>
            <Tooltip title="Open settings">
              <button onClick={handleOpenUserMenu} className="avatar-btn">
                <Avatar alt="Madina" sx={{width:"32px", height:"32px"}} src="/static/images/avatar/2.jpg" />
                <div className="user-name">Madina</div>
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
                  <Typography textAlign="center" sx={{fontFamily: 'poppins400', fontSize: "16px", lineHeight: "24px", letterSpacing: "0.115em" }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </div>
    </div>
  );
}
export default HeaderAvatar;
