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

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface Value {
  city: string;
  firstName: string;
  lastName: string;
}

const validate = (values: Value) => {
  const errors: Value = {
    city: "",
    firstName: "",
    lastName: "",
  };

  if (!values.city) {
    errors.city = "Required";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  return errors;
};

export const CategoryBar = () => {
  const dispatch = useDispatch<any>();
  const categories = useCategories();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      city: "",
      gender: null,
      duration: null,
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
    <form className="filter" onSubmit={formik.handleSubmit}>
      <FormControlLabel control={<Switch />} label="Verified" />
      {categories && categories.isLoading ? (
        <div>loading</div>
      ) : categories && Array.isArray(categories.data) ? (
        <div>
          {categories.data.map((item: any) => (
            <div key={item.name}>
              <h6>{item.name}</h6>
              <div>
                {Array.isArray(item.subcategories)
                  ? item.subcategories.map((sub: any, index: number) => {
                      return <p key={index}> {sub?.name}</p>;
                    })
                  : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {/* <Autocomplete
            size="small"
            id="city"
            sx={{ width: 150 }}
            getOptionLabel={(option) => option.name}
            options={citys.sort(
              (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
            )}
            groupBy={(option) => option.firstLetter}
            renderInput={(params) => (
              <TextField {...params} label="City" name="city" />
            )}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <SelectInput options={housingCategory} name="Category" />
          <TextField
            id="standard-basic"
            size="small"
            label="Price (тг)"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <SelectInput options={gender} name="Gender" />
          <SelectInput options={duration} name="Duration" />
          <Autocomplete
            multiple
            id="multiple-limit-tags"
            size="small"
            options={amenities}
            limitTags={2}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => (
              <li {...props} key={option.id}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Amenities"
                placeholder="Amenities"
              />
            )}
            sx={{ m: 1, width: "500px" }}
          /> */}
      <TextField
        id="outlined-number"
        label="Rooms"
        type="number"
        size="small"
      />
      {/* <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="contained" onClick={() => setItem(Data)}>
          All
        </Button>
      </Box> */}
    </form>
  );
};
