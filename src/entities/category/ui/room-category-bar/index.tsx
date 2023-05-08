// @ts-nocheck
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { useStyles } from "src/app/assets/style/filter-style";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import BasicMenu from "src/app/components/Menu";
import SelectField from "src/app/components/SelectField";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import "src/entities/category/ui/room-category-bar/index.scss";

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
  const [count, setCount] = useState({
    age: 0,
    gender: 0,
    duration: 0,
    layout: 0,
    inthehome: 0,
    location: 0,
    min_price: 0,
    max_price: 0,
    room: 0,
    amenities: 0,
  });

  const formik = useFormik({
    initialValues: {
      age: "",
      gender: "",
      duration: "",
      layout: "",
      inthehome: "",
      location: "",
      min_price: 0,
      max_price: 0,
      room: "",
      amenities: "",
    },
    onSubmit: (values) => {
      // handle form submission
      submit(values);
    },
  });

  useEffect(() => {
    formik.submitForm();
    console.log("here", count);
  }, [formik.values]);

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
            onChange={(e) => {
              e.preventDefault(); // back end search - keyword
              console.log("here", e.target.value);
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div className="row m-1">
        <form className="filter" onSubmit={formik.handleSubmit}>
          <BasicMenu label="profile details" count={count.age + count.gender}>
            <SelectField
              options={data[0].subcategories}
              title="Gender"
              name="gender"
              value={formik.values.gender}
              setCount={setCount}
              onChange={formik.setFieldValue}
            />
            <SelectField
              options={data[1].subcategories}
              title="Age"
              name="age"
              value={formik.values.age}
              setCount={setCount}
              onChange={formik.setFieldValue}
            />
          </BasicMenu>
          <BasicMenu label="Price" count={count.min_price + count.max_price}>
            <div className="filter__price">
              <TextField
                id="standard-basic"
                size="small"
                value={formik.values.min_price}
                label="min price"
                name="min_price"
                variant="outlined"
                sx={{ width: "120px" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  formik.setFieldValue("min_price", event.target.value);
                  setCount((prevState: any) => ({
                    ...prevState,
                    min_price: formik.values.min_price ? 1 : 0,
                  }));
                }}
              />
              <TextField
                id="standard-basic"
                size="small"
                label="max price"
                value={formik.values.max_price}
                name="max_price"
                variant="outlined"
                sx={{ width: "120px" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  formik.setFieldValue("max_price", event.target.value);
                  setCount((prevState: any) => ({
                    ...prevState,
                    max_price: formik.values.max_price ? 1 : 0,
                  }));
                }}
              />
            </div>
          </BasicMenu>
          <BasicMenu label="duration" count={count.duration}>
            <SelectField
              options={data[2]?.subcategories || []}
              title="duration"
              name="duration"
              value={formik.values.duration}
              setCount={setCount}
              onChange={formik.setFieldValue}
            />
          </BasicMenu>
          <BasicMenu
            label="listing details"
            count={count.layout + count.amenities}
          >
            <SelectField
              options={data[3]?.subcategories || []}
              title="LAYOUT"
              name="layout"
              value={formik.values.layout}
              setCount={setCount}
              onChange={formik.setFieldValue}
            />
            <SelectField
              options={data[4]?.subcategories || []}
              title="AMENITIES"
              name="amenities"
              value={formik.amenities}
              setCount={setCount}
              onChange={formik.setFieldValue}
            />
          </BasicMenu>
          <BasicMenu label="location" count={count.location}>
            <List className="filter__location">
              {data[5]?.subcategories?.map((item) => {
                return (
                  <ListItemButton
                    key={item.id}
                    className={item.id === selected ? "location_active" : ""}
                    selected={item.id === selected}
                    onClick={(event) => {
                      setSelected(item.id);
                      setCount({ ...count, location: selected ? 1 : 0 });
                    }}
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                );
              })}
            </List>
          </BasicMenu>
        </form>
      </div>
    </div>
  );
};
