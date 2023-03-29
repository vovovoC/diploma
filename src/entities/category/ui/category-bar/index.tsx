// @ts-nocheck
import { useFormik, Formik } from "formik";
import SelectInput from "../../../../app/components/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useStyles } from "../../../../app/assets/style/filter-style";
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
  data: any;
  submit: (args: Value) => void;
}

export const CategoryBar = ({ data, submit }: Props) => {
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

  const initialValues = {
    age: "",
    gender: "",
    duration: "",
    layout: "",
    inthehome: "",
    location: "",
    price: "",
    room: "",
  };

  return (
    <div>
      <div className="title">
        <h6>Search properties or room</h6>
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
              {Array.isArray(data) && (
                <div>
                  {data.map((item: any, i) => (
                    <SelectInput
                      options={item.subcategories}
                      name={item.name}
                      key={item.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ))}
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
                  <TextField
                    id="outlined-number"
                    label="Rooms"
                    sx={{ width: "100px" }}
                    type="number"
                    className={classes.root}
                    size="small"
                    name="room"
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
                    All
                  </Button>
                </div>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
