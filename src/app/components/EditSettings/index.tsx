import "./index.scss";
import * as React from "react";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

interface Props {
  fn: () => void;
  edit: any;
  initialValues: any;
}
export const EditSettings = ({ fn, edit, initialValues }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ""
  })
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(()=>{
    setData(initialValues)
  }, [initialValues])

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
          value={data.email}
          id="email"
          label="Username or email address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e)=>{
            setData({...data, email: e.target.value})
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          value={data.password}
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="password"
          onChange={(e)=>{
            setData({...data, password: e.target.value})
          }}
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
            edit(data);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
