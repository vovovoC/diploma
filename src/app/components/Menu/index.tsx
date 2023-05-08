import * as React from "react";
import { IconButton, Box, Menu, Tooltip } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "src/app/components/Menu/index.scss";

export default function BasicMenu({ children, count, label }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: any) => {
    e.stopPropagation();
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <div
            className="basic-menu"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {count > 0 ? (
              <div className="basic-menu__count"> {count} </div>
            ) : null}
            <span className="basic-menu__label"> {label} </span>
            <IconButton onClick={handleClick}>
              {open ? (
                <div className="basic-menu__arrow">
                  <ExpandLessIcon
                    style={{
                      color: "#0E0E0E",
                      fontWeight: "lighter",
                      fontSize: "14px",
                    }}
                  />
                </div>
              ) : (
                <div className="basic-menu__arrow">
                  <ExpandMoreIcon
                    style={{
                      color: "#0E0E0E",
                      fontWeight: "lighter",
                      fontSize: "14px",
                    }}
                  />
                </div>
              )}
            </IconButton>
          </div>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {children}
      </Menu>
    </React.Fragment>
  );
}
