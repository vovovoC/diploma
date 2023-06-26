// @ts-nocheck
import * as React from "react";
import { useDispatch } from "react-redux";
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
import Backdrop from "@mui/material/Backdrop";
import Modal from '@mui/material/Modal';
import "src/entities/category/ui/room-category-bar/index.scss";
import {gender, amenities, housingCategory, city, duration, layout, age} from 'src/shared/filter'

import TuneIcon from '@mui/icons-material/Tune';

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
  getkeyword: (args: any) => void
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

export const RoommateCategoryBar = ({ data = [], submit, getkeyword }: Props) => {

  const [openEditFilter, setOpenEditFilter] = React.useState(false);
 
  const handleCloseEditFilter = () => {
    setOpenEditFilter(false);
  };
  const handleToggleEditFilter = () => {
    setOpenEditFilter(!openEditFilter);
  };

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
  }, [formik.values]);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="title spaceBetween">
        <h6>Find renters</h6>
        <div className="spaceBetween">
          <div className="filter_icon"  onClick={handleToggleEditFilter}>
            <TuneIcon sx={{float: "right", color: "white"}}/>
            <p>Filters</p>
          </div>
          <Modal
            open={openEditFilter}
            onClose={handleCloseEditFilter}
          >
            <div className="filter_mobile" >
              <form onSubmit={formik.handleSubmit}>
              <SelectField
                options={data[1]?.subcategories || []}
                title="Gender"
                name="gender"
                style={{borderTopLeftRadius: 20 + "px", borderTopRightRadius: 20 + "px"}}
                value={formik.values.gender}
                setCount={setCount}
                onChange={formik.setFieldValue}
              />
              <SelectField
                options={data[0]?.subcategories || []}
                title="Age"
                name="age"
                value={formik.values.age}
                setCount={setCount}
                onChange={formik.setFieldValue}
              />
              <div>
                <div className="select-field__title">Price</div>
                <div className="select-field__content">
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
                </div>
              </div>
              <SelectField
                options={duration}
                title="Duration"
                name="duration"
                value={formik.values.duration}
                setCount={setCount}
                onChange={formik.setFieldValue}
              />
              <SelectField
               options={layout}
               title="Layout"
               name="layout"
               value={formik.values.layout}
               setCount={setCount}
               onChange={formik.setFieldValue}
              />
              <SelectField
                options={data[4]?.subcategories || []}
                title="Amenities"
                name="amenities"
                value={formik.amenities}
                setCount={setCount}
                onChange={formik.setFieldValue}
              />
              <div>
                <div className="select-field__title">Location</div>
                <div className="select-field__content">
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
                </div>
              </div>
              </form>
            </div>
          </Modal>
          {/* <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openEditFilter}
          >
            
          </Backdrop> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              onChange={(e) => {
                e.preventDefault(); // back end search - keyword
                console.log("here", e.target.value);
                dispatch()
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
      </div>
      <div className="row m-1 filter_web">
        <form className="filter" onSubmit={formik.handleSubmit}>
          <BasicMenu label="profile details" count={count.age + count.gender}>
            <SelectField
              options={data[1]?.subcategories || []}
              title="Gender"
              name="gender"
              value={formik.values.gender}
              setCount={setCount}
              onChange={formik.setFieldValue}
            />
            <SelectField
              options={data[0]?.subcategories || []}
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
