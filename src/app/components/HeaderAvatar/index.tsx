import * as React from "react";
import { useNavigate } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Notification from "./Notification/index";
import "./index.scss";

interface Props {
  userName: string;
}

const settings = [{ name: "Profile" }, { name: "Home" }, { name: "Logout" }];
const ntf = [
  { id: 0, user: "Zahniya Medeuova", date: "", img: "", msg: "" },
  { id: 1, user: "", date: "", img: "", msg: "" },
  { id: 2, user: "", date: "", img: "", msg: "" },
  { id: 3, user: "", date: "", img: "", msg: "" },
  { id: 4, user: "", date: "", img: "", msg: "" },
];
const posts = [
  {
    id: 0,
    icon: <HomeOutlinedIcon sx={{ color: "#5D89FA" }} />,
    name: "as a Landlord looking for a renters",
  },
  {
    id: 1,
    icon: <PeopleAltIcon sx={{ color: "#5D89FA" }} />,
    name: "as Renter looking for a room",
  },
];

function HeaderAvatar({ userName }: Props) {
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

  const handleCloseUserMenu = (e: string) => {
    setAnchorElUser(null);
    let path = "";
    switch (e) {
      case "Home":
        path = "/";
        break;
      case "Profile":
        path = "/profile";
        break;
      case "Logout":
        localStorage.removeItem("user_id");
        localStorage.removeItem("userName");
        path = "/login";
        break;
      default:
        path = "";
    }
    navigate(path);
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
              <AddIcon />
            </button>
          </Tooltip>
          <Menu
            sx={{ mt: "55px", width: "auto" }}
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
            <MenuItem
              key={0}
              onClick={() => navigate("/post/create/new")}
              sx={{
                width: "100%",
                m: "0 14px",
                p: "6px 0",
                fontSize: "12px",
                lineHeight: "18px",
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "baseline",
                borderBottom: "0.4px solid #777676",
              }}
            >
              <div>{posts[0].icon}</div>
              <p className="post-name">{posts[0].name}</p>
            </MenuItem>
            <MenuItem
              key={1}
              onClick={() => navigate("/room/create/new")}
              sx={{
                m: "0 14px",
                p: "6px 0",
                fontSize: "12px",
                lineHeight: "18px",
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <div>{posts[1].icon}</div>
              <p className="post-name">{posts[1].name}</p>
            </MenuItem>
          </Menu>
        </Box>
      </div>
      <div className="notifications">
        <Box sx={{ overflow: "hidden" }}>
          <Tooltip title="Open nutifications">
            <button onClick={handleOpenNtfMenu} className="notification-btn">
              <NotificationsNoneIcon />
              <div className="ntf-count">1</div>
            </button>
          </Tooltip>
          <Menu
            sx={{
              mt: "55px",
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
              <button>
                Mark all as read <div className="ntf-mark"></div>
              </button>
            </div>
            {ntf.map((i) => (
              <MenuItem
                key={i.id}
                onClick={handleCloseNtfMenu}
                sx={{ width: "auto", p: "0" }}
              >
                <Notification />
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
      <div className="user-avatar">
        <Box
          sx={{
            flexGrow: 0,
            fontFamily: "poppins400",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.115em",
          }}
        >
          <Tooltip title="Open settings">
            <button onClick={handleOpenUserMenu} className="avatar-btn">
              <Avatar
                alt={userName}
                sx={{ width: "32px", height: "32px" }}
                src="/static/images/avatar/2.jpg"
              />
              <div className="avatar-name">{userName}</div>
              <ExpandMoreIcon sx={{ color: "black" }} />
            </button>
          </Tooltip>
          <Menu
            sx={{ mt: "55px", padding: "26px" }}
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
            onClose={() => {
              setAnchorElUser(null);
            }}
          >
            {settings.map((setting, key) => (
              <MenuItem
                key={setting.name}
                onClick={() => handleCloseUserMenu(setting.name)}
                sx={{
                  width: "202px",
                  margin: "14px 26px",
                  borderBottom: "1px solid #ECECEC",
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    fontFamily: "poppins400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.115em",
                    display: "block",
                  }}
                >
                  {setting.name}
                  {setting.name === "Logout" ? (
                    <LogoutIcon sx={{ ml: "3px", width: "15px" }} />
                  ) : (
                    ""
                  )}
                  {setting.name === "Profile" ? (
                    <span className="profile-status">Incomplete</span>
                  ) : (
                    ""
                  )}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
    </div>
  );
}
export default HeaderAvatar;
