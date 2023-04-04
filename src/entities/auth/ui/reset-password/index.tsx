import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { fetchLogin, useUserInfo } from "../../model";
import { useDispatch } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,24}$/;

interface Value {
  email: string | null;
  password: string | null;
  cnfpassword: string | null;
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

  if (!values.cnfpassword) {
    errors.cnfpassword = "Confirm password is required";
    return errors;
  } else if (values.cnfpassword !== values.password) {
    errors.cnfpassword = "The password confirmation does not match!";
    return errors;
  }
  return errors;
};

export const ResetPassword = (props: any) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const userInfo = useUserInfo();
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
      cnfpassword: null,
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
          title: "Password Changed!",
          msg: "Your password has been changed successfully.",
        },
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
          <h4 className="card-title-reset">Reset your password</h4>
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
          label="New password"
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
        <TextField
          margin="normal"
          required
          fullWidth
          name="cnfpassword"
          label="Confirm password"
          type="password"
          id="cnfpassword"
          error={!!formik.errors.cnfpassword}
          helperText={formik.errors.cnfpassword}
          autoComplete="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cnfpassword}
        />
        <Button
          type="submit"
          fullWidth
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
          Confirm
        </Button>
        <div
          className="forget-psw-btn cancel"
          onClick={() => navigate("/login")}
        >
          Cancel reset password
        </div>
      </form>
    </div>
  );
};
