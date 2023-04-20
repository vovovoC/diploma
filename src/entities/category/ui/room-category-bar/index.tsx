// @ts-nocheck
import { useFormik, Formik } from "formik";
import SelectInput from "../../../../app/components/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useStyles } from "../../../../app/assets/style/filter-style";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./index.scss";
import { useEffect, useState } from "react";
import { DatePickerField } from "../../../../app/components/DatePicker";
import BasicMenu from "../../../../app/components/Menu";
import SelectField from "../../../../app/components/SelectField";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

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
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  border: "1px solid #E0E5FC",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const RoomCategoryBar = ({ data, submit }: Props) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(1);

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
        <h6>Search appartment or room</h6>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div className="row m-1">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values) => {
            submit(values);
          }}
        >
          {({ handleChange, handleBlur, values, handleSubmit }) => (
            <form className="filter" onSubmit={handleSubmit}>
              <DatePickerField label="posted date" />
              <BasicMenu label="profile details" count={2}>
                <SelectField
                  options={data[0].subcategories}
                  title={"Gender"}
                  value={data[0].subcategories[0]?.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <SelectField
                  options={data[1].subcategories}
                  title={"Age"}
                  value={data[1].subcategories[0]?.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </BasicMenu>
              <BasicMenu label="Price" count={2}>
                <div className="filter__price">
                  <TextField
                    id="standard-basic"
                    size="small"
                    label="min price"
                    name="min_price"
                    variant="outlined"
                    sx={{ width: "120px" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextField
                    id="standard-basic"
                    size="small"
                    label="max price"
                    name="max_price"
                    variant="outlined"
                    sx={{ width: "120px" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </BasicMenu>
              <BasicMenu label="duration" count={3}>
                <SelectField
                  options={data[2]?.subcategories || []}
                  title={"duration"}
                  value={data[2]?.subcategories[0]?.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </BasicMenu>
              <BasicMenu label="listing details" count={3}>
                <SelectField
                  options={data[3]?.subcategories || []}
                  title={"LAYOUT"}
                  value={data[3]?.subcategories[0]?.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <SelectField
                  options={data[4]?.subcategories || []}
                  title={"AMENITIES"}
                  value={data[4]?.subcategories[0]?.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </BasicMenu>
              <BasicMenu label="location" count={3}>
                <List className="filter__location">
                  {data[5]?.subcategories?.map((item) => {
                    return (
                      <ListItemButton
                        key={item.id}
                        className={
                          item.id === selected ? "location_active" : ""
                        }
                        selected={item.id === selected}
                        onClick={(event) => setSelected(item.id)}
                      >
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </BasicMenu>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
