import * as React from "react";
import { useFormik } from "formik";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import "./index.scss";



interface Value {
  password: string | null;
  email: string | null;
}

const validate = (values: Value) => {
  const errors: Value = {
    password: null,
    email: null,
  };

  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export default function SignIn(props:any) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
              <button onClick={props.fn}>Sign up</button>
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
            type="password"
            id="password"
            error={!!formik.errors.password}
            helperText={formik.errors.password}
            autoComplete="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Grid container sx={{justifyContent: "space-between", alignItems: "center"}}>
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" sx={{color: "#AD3113", textDecoration: "none"}}>
                Forgot password
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 3, mb: 2, p: "15px 0",
              backgroundColor:  "#0032E4", 
              borderRadius: "10px", 
              fontFamily: 'poppins500',
              fontSize: "16px",
              lineHeight: "24px",
              textTransform: "none"
          }}
          >
            Sign In
          </Button>
        </form>
     
    </div>
  );
}
