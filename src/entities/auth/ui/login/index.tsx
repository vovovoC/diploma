import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

import Grid from "@mui/material/Grid";
import { fetchLogin, useUserInfo } from "../../model";
import { useDispatch } from "react-redux";
import { Notification } from "../../../../app/components/Notification";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,24}$/;
interface Value {
  email: string | null;
  password: string | null;
}

const validate = (values: Value) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Email address required";
    return errors;
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Invalid email address";
    return errors;
  }

  if (!values.password) {
    errors.password = "Password is required";
    return errors;
  } else if (!PWD_REGEX.test(values.password)) {
    errors.password =
      "Password should be 8-20 characters and include at least 1 letter, 1 number!";
    return errors;
  }
  return errors;
};

export const Login = (props: any) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const userInfo = useUserInfo();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const dispatch = useDispatch<any>();

  const formik = useFormik({
    initialValues: {
      email: null,
      password: null,
    },
    validate,
    onSubmit: (values) => {
      dispatch(fetchLogin(values));

      //notification msgs
      const ntf = [
        ...props.props.ntfList,
        {
          id: props.props.ntfList.length,
          type: "success",
          title: "Success",
          msg: "Success Login",
        },
        // {
        //   id: props.props.ntfList.length+1,
        //   type: "warning",
        //   title: "Warning",
        //   msg: "Just warning",
        // },
        // {
        //   id: props.props.ntfList.length+2,
        //   type: "danger",
        //   title: "Danger",
        //   msg: "Can not connect to server",
        // },
      ];

      props.props.showNtf(ntf);
      setTimeout(() => {
        if (userInfo.token) {
          navigate("/");
        }
      }, 100);
    },
  });
  return (
    <div className="sign-in">
      <div className="card-title">
        <div className="card-title-welcome">
          <p>Welcome to Qonys</p>
          <h5>Sign in</h5>
        </div>
        <div className="card-title-question">
          <p>No Account ?</p>
          <button onClick={() => navigate("/register")}>Sign up</button>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Username or email address"
          name="email"
          autoComplete="email"
          autoFocus
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          error={!!formik.errors.password}
          helperText={formik.errors.password}
          autoComplete="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
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
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <button
              className="forget-psw-btn"
              onClick={() => navigate("/resetPsw")}
            >
              Forgot password
            </button>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          onClick={() => navigate("/")}
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            p: "15px 0",
            backgroundColor: "#0032E4",
            borderRadius: "10px",
            fontFamily: "poppins500",
            fontSize: "16px",
            lineHeight: "24px",
            textTransform: "none",
          }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};
