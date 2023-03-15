import { useEffect, useMemo } from "react";
import { useFormik } from "formik";
import SelectInput from "../../../../app/components/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { setCategoryFilter, getCategoryList, useCategories } from "../../model";
import { useDispatch } from "react-redux";
import { useStyles } from "../../../../app/assets/style/filter-style";
import "./index.scss";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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

export const CategoryBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch<any>();
  const categories = useCategories();

  const formik = useFormik({
    initialValues: {
      age: "",
      gender: "",
      duration: "",
      layout: "",
      inthehome: "",
      location: "",
      price: "",
      room: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(setCategoryFilter(values));
    },
  });

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);
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
        <form className="filter" onSubmit={formik.handleSubmit}>
          {categories && categories.isLoading ? (
            <div>loading</div>
          ) : categories && Array.isArray(categories.data) ? (
            <div>
              {categories.data.map((item: any) => (
                <SelectInput options={item.subcategories} name={item.name} />
              ))}
              <TextField
                id="standard-basic"
                size="small"
                label="Price (tg)"
                variant="outlined"
                sx={{ width: "120px" }}
                className={classes.root}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <TextField
                id="outlined-number"
                label="Rooms"
                sx={{ width: "100px" }}
                type="number"
                className={classes.root}
                size="small"
              />
              <Button
                variant="contained"
                sx={{
                  background: "#69A3F9",
                  textTransform: "none",
                  m: "0 10px",
                }}
                onClick={() => console.log("set all data")}
              >
                All
              </Button>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};
