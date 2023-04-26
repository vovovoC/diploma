import "./index.scss";
import * as React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

interface Props {
  fn: () => void;
  edit: any;
}
export const EditSettings = ({ fn, edit }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="settings edit-settings">
      <div className="settings-header">
        <div>Settings</div>
        <button className="cnf-card-close" title="Close" onClick={() => fn()}>
          <CloseIcon sx={{ color: "white" }} />
        </button>
      </div>
      <div className="anketa-body">
        <TextField
          margin="normal"
          required
          fullWidth
          defaultValue="madinkalzh@mail.ru"
          id="email"
          label="Username or email address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          defaultValue="345678900"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <button
          title="Save settings"
          className="save-btn"
          onClick={(e) => {
            e.preventDefault();
            edit();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
