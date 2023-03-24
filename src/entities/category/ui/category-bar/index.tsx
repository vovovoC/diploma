// @ts-nocheck
import { useEffect } from "react";
import { useFormik } from "formik";
import SelectInput from "../../../../app/components/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { setCategoryFilter, getCategoryList, useCategories } from "../../model";
import { useDispatch, useSelector } from "react-redux";
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
  const { isLoading, data } = useSelector((state: any) => {
    return state.categories;
  });

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
      console.log(values);
    },
  });

  useEffect(() => {
    // request by 2 times fix
    console.log("request");
    dispatch(getCategoryList());
    console.log("request 1");
  }, [dispatch]);

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
      <div className="mt-3 mb-3">
        <form
          className="filter"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          {isLoading ? (
            <div>loading</div>
          ) : (
            Array.isArray(data) && (
              <div>
                {data.map((item: any) => (
                  <SelectInput
                    options={item.subcategories}
                    name={item.name}
                    key={item.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                  name="room"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Button
                  variant="contained"
                  sx={{
                    background: "#69A3F9",
                    textTransform: "none",
                    m: "0 10px",
                  }}
                  type="submit"
                >
                  All
                </Button>
              </div>
            )
          )}
        </form>
      </div>
    </div>
  );
};
