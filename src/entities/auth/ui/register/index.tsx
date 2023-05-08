import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { Loader } from "src/app/components/Loader";
import { EMAIL_VALIDATION, PWD_VALIDATION } from "src/shared/helper";
interface Value {
  password: string;
  username: string;
  email: string;
}

const validate = (values: Value) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Enter your email address";
    return errors;
  } else if (!EMAIL_VALIDATION.test(values.email)) {
    errors.email = "Invalid email address";
    return errors;
  }
  if (!values.username) {
    errors.username = "Enter your full name";
    return errors;
  }

  if (!values.password) {
    errors.password = "Enter password";
    return errors;
  } else if (!PWD_VALIDATION.test(values.password)) {
    errors.password =
      "Password should be 8-20 characters and include at least 1 letter, 1 number!";
    return errors;
  }
  return errors;
};

export const Register = (props: any) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {},
  });

  return (
    <div className="sign-up">
      <div className="card-title">
        <div className="card-title-welcome">
          <p>Welcome to Qonys</p>
          <h5>Sign up</h5>
        </div>
        <div className="card-title-question">
          <p>Have an Account ?</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              formik.resetForm();
              navigate("/login");
            }}
          >
            Sign in
          </button>
        </div>
      </div>
      <form>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Username or email address"
          name="email"
          autoComplete="email"
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
          id="fullname"
          label="User name"
          name="username"
          error={!!formik.errors.username}
          helperText={formik.errors.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            props.handleSubmit(formik.values);
          }}
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
          {props.isLoading ? <Loader /> : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};
