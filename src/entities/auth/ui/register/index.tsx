import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
interface Value {
  password: string | null;
  name: string | null;
  phonenumber: string | null;
  email: string | null;
}

const validate = (values: Value) => {
  const errors: Value = {
    password: null,
    name: null,
    phonenumber: null,
    email: null,
  };

  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.phonenumber) {
    errors.phonenumber = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phonenumber: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
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
        <Grid container spacing={2}>
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
        </Grid>
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
