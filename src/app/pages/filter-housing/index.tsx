import { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import { createTheme } from "@mui/material/styles";
import Data from "./Data";
import { duration } from "../../../shared/filter";
import { city } from "../../../shared/filter";
import { gender } from "../../../shared/filter";
import { amenities } from "../../../shared/filter";
import { housingCategory } from "../../../shared/filter";
import SelectInput from "../../components/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Post } from "../../components/Post";
import Layout from "../../components/Layout";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./index.scss";
import { getCategories } from "../../utils/api/request";
import {useStyles} from "../../assets/style/filter-style";

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

const FilterHousingPage = () => {
  const theme = createTheme();
  const [item, setItem] = useState(Data);
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      city: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    getCategories();
  }, []);

  const citys = useMemo(() => {
    return city.map((option) => {
      const firstLetter = option.name[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...option,
      };
    });
  }, []);

  return (
    <Layout theme={theme}>
      <div className="title">
        <h6>Search properties or room</h6>
        <input type="search" className="search" name="user-search" id="user-search" />
      </div>
      <div className="row m-3">
        <form className="filter mb-5" onSubmit={formik.handleSubmit}>
          {/* <FormControlLabel control={<Switch />} label="Verified" /> */}
          <Autocomplete
            size="small"
            id="city"
            className={classes.root}
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
            className={classes.root}
            label="Price(tg)"
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
            className={classes.root}
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
            sx={{ m: 1, width: "230px" }}
          />
          <TextField
            id="outlined-number"
            label="Rooms"
            type="number"
            className={classes.root}
            size="small"
          />
          <Box>
            <Button variant="contained" onClick={() => setItem(Data)}>
              All
            </Button>
          </Box>
        </form>

        <div className="post-list">
          {item.map((value: any) => (
            <Post item={value} />
          ))}
        </div>
        <Stack spacing={2}>
          <Pagination count={10} color="primary" sx={{m: "2rem auto 3rem"}} />
        </Stack>
      </div>
    </Layout>
  );
};

export default FilterHousingPage;
