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
import { EMAIL_VALIDATION, PWD_VALIDATION } from "src/shared/helper";
import { Loader } from "src/app/components/Loader";
import { Typography } from "@mui/material";
interface Value {
  email: string | null;
  password: string | null;
}

const validate = (values: Value) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Email address required";
    return errors;
  } else if (!EMAIL_VALIDATION.test(values.email)) {
    errors.email = "Invalid email address";
    return errors;
  }

  if (!values.password) {
    errors.password = "Password is required";
    return errors;
  } else if (!PWD_VALIDATION.test(values.password)) {
    errors.password =
      "Password should be 8-20 characters and include at least 1 letter, 1 number!";
    return errors;
  }
  return errors;
};

interface Props {
  isLoading: boolean;
  handleSubmit: (values: any) => void;
}

export const Login = ({ isLoading, handleSubmit }: Props) => {
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
      email: null,
      password: null,
    },
    validate,
    onSubmit: (values) => {},
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
          <button
            onClick={(e) => {
              e.preventDefault();
              formik.resetForm();
              navigate("/register");
            }}
          >
            Sign up
          </button>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formik.values);
        }}
      >
        <TextField
          margin="normal"
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
            <Typography
              className="forget-psw-btn"
              color="error"
              onClick={(e) => {
                e.preventDefault();
                formik.resetForm();
                navigate("/resetPsw");
              }}
            >
              Forgot password
            </Typography>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(formik.values);
          }}
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
          {isLoading ? <Loader /> : "Sign In"}
        </Button>
      </form>
    </div>
  );
};
