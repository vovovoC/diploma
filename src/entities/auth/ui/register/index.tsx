import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { fetchRegister } from "../../model";
import { useDispatch } from "react-redux";

const USERNAME_REGEX = /^[A-Za-z]{3,}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,24}$/;
interface Value {
  password: string;
  name: string;
  email: string;
}

const validate = (values: Value) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Enter your email address";
    return errors;
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Invalid email address";
    return errors;
  }
  if (!values.name) {
    errors.name = "Enter your full name";
    return errors;
  } else if (!USERNAME_REGEX.test(values.name)) {
    errors.name =
      "Username should be 3-40 characters and shouldn't include any special character and numbers!";
    return errors;
  }

  if (!values.password) {
    errors.password = "Enter password";
    return errors;
  } else if (!PWD_REGEX.test(values.password)) {
    errors.password =
      "Password should be 8-20 characters and include at least 1 letter, 1 number!";
    return errors;
  }
  return errors;
};

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(fetchRegister(values));
    },
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
          <button onClick={() => navigate("/login")}>Sign in</button>
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
          id="name"
          label="User name"
          name="name"
          error={!!formik.errors.name}
          helperText={formik.errors.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {/* <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="User name"
              name="name"
              error={!!formik.errors.name}
              helperText={formik.errors.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="phonenumber"
              label="Contact Number"
              name="phonenumber"
              error={!!formik.errors.phonenumber}
              helperText={formik.errors.phonenumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phonenumber}
            />
          </Grid>
        </Grid> */}
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};
