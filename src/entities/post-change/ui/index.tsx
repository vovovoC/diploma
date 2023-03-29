// @ts-nocheck
import { Formik } from "formik";
import SelectInput from "../../../../app/components/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useStyles } from "../../../app/assets/style/filter-style";
import "./index.scss";

interface Value {
  age: string;
  gender: string;
  duration: string;
  layout: string;
  inthehome: string;
  location: string;
  price: string;
  room: string;
}
interface Props {
  initialValues: any;
  submit: (args: Value) => void;
  isEdit: boolean;
}

export const PostChange = ({ initialValues, submit, isEdit }: Props) => {
  const classes = useStyles();

  const validate = (values: Value) => {
    const errors: Value = {
      age: "",
      gender: "",
      duration: "",
      layout: "",
      inthehome: "",
      location: "",
      price: "",
      room: "",
    };

    if (!values.location) {
      errors.location = "Required";
    }

    return errors;
  };

  return (
    <div>
      <div className="title">
        <h6>PostChange</h6>
        <input
          type="search"
          className="search"
          name="user-search"
          id="user-search"
        />
      </div>
      <div className="row m-3">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values) => {
            submit(values);
          }}
        >
          {({ handleChange, handleBlur, values, handleSubmit }) => (
            <form className="filter" onSubmit={handleSubmit}>
              <TextField
                id="standard-basic"
                size="small"
                label="Price (tg)"
                name="price"
                variant="outlined"
                sx={{ width: "120px" }}
                className={classes.root}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button
                variant="contained"
                sx={{
                  background: "#69A3F9",
                  textTransform: "none",
                  m: "0 10px",
                }}
                type="submit"
                onClick={() => submit(values)}
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
