import { useFormik } from "formik";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import BackButton from "src/app/components/BackButton";
import "./index.scss";
import { Loader } from "src/app/components/Loader";
import ImageAction from "src/app/components/ImageAction";
import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { amenities, city, duration, layout } from "src/shared/filter";
import { MapContent } from "src/app/components/Map";

export const RoomAddPost = ({
  create,
  isLoading,
  initialValues,
}: {
  create: (values: any) => void;
  isLoading: boolean;
  initialValues: any;
}) => {
  const [files, setFiles] = React.useState<any>([]);
  const filesRef = React.useRef<any>(null);
  const [currentImg, setCurrentImg] = useState();

  const validate = (values: any) => {
    const errors: any = {
      ...initialValues,
    };

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {},
  });

  const addImages = (e: any) => {
    const targetFiles = e.target.files;
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        resolve(e.target.result);
      };
      reader.readAsDataURL(targetFiles[0]);
    });
    promise.then((res) => {
      files.push(res);
      setFiles([...files]);

      const formData = new FormData();

      const blob = new Blob([res as any], { type: "image/png" });
      formData.append("images", blob);
      const prevFiles = formik.values.image;
      formik.setFieldValue("image", [...prevFiles, formData]);
    });
  };

  const onUploadImage = () => {
    filesRef.current.click();
  };

  const onRemove = (index: number) => {
    files.splice(index, 1);
    setFiles([...files]);
    formik.setFieldValue("image", [...files]);
  };

  useEffect(() => {
    console.log("here", formik.values);
  }, [formik.values]);

  return (
    <div className="wrapper addPost">
      <BackButton name="home" />
      <p className="page-title">Add post</p>
      <form className="add-post">
        <div className="add-post-container">
          <FormControl fullWidth size="small">
            <label>Location</label>
            <Select
              variant="outlined"
              sx={{
                background: "#FFFFFF",
                color: "#808494",
              }}
              id="location"
              name="location"
              error={!!formik.errors.city} // @ts-ignore
              helpertext={formik.errors.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            >
              <MenuItem value="">None</MenuItem>
              {city.map((item: any) => {
                return (
                  <MenuItem value={item.name} key={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <label htmlFor="street">Street or microdistrict</label>
            <TextField
              id="street"
              name="street"
              error={!!formik.errors.street} // @ts-ignore
              helpertext={formik.errors.street}
              onChange={formik.handleChange}
              value={formik.values.street}
              placeholder="ex. Baitursynova"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                background: "#FFFFFF",
                color: "#808494",
              }}
            />
          </FormControl>
        </div>
        <div className="flex">
          <div className="add-post-container">
            <FormControl>
              <label htmlFor="street">Floor</label>
              <TextField
                id="street"
                name="street"
                error={!!formik.errors.street} // @ts-ignore
                helpertext={formik.errors.street}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="ex. 5"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  background: "#FFFFFF",
                  color: "#808494",
                }}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="home">Square area, m2</label>
              <TextField
                id="home"
                name="home"
                error={!!formik.errors.home} // @ts-ignore
                helpertext={formik.errors.home}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="ex. 5"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  background: "#FFFFFF",
                  color: "#808494",
                }}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="room_nums">Number of Rooms</label>
              <TextField
                id="room_nums"
                placeholder="ex. 2"
                name="room_nums"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  background: "#FFFFFF",
                  color: "#808494",
                }}
                error={!!formik.errors.room_nums} // @ts-ignore
                helpertext={formik.errors.room_nums}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
          </div>
          <div className="add-post-container">
   
            <FormControl>
              <label htmlFor="price">Price</label>
              <TextField
                id="price"
                name="price"
                error={!!formik.errors.price} // @ts-ignore
                helpertext={formik.errors.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter the price"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  background: "#FFFFFF",
                  color: "#808494",
                }}
              />
            </FormControl>
          </div>
        </div>

        <div>
          <p className="form-title">
            Be sure to specify the location on the map
          </p>
          <MapContent
              submit={formik.setFieldValue}
              coors={formik.values.coordinates}
            />
        </div>

        <div>
          <p className="form-title">Available date and duration</p>
          <div>
            <FormControl className="form-radio">
              <RadioGroup
                aria-labelledby="duration of rent rooms"
                defaultValue=""
                name="duration"
                className="form-radio__group"
              >
                {duration.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`form-radio__item ${
                        formik.values.duration === item.name &&
                        "form-radio__item__active"
                      }`}
                      onClick={() => {
                        formik.setFieldValue(
                          "duration",
                          formik.values.duration === item.name ? "" : item.name
                        );
                      }}
                    >
                      <FormControlLabel
                        style={{ height: "20px" }}
                        value={item.name}
                        control={<Radio />}
                        label={item.name}
                        checked={formik.values.duration === item.name}
                      />
                      <p className="form-radio__helper">{item.text}</p>
                    </div>
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div>
          <p className="form-title">Upload Photos</p>
          <div className="addPost__image">
            {files.map((file: string, i: number) => (
              <ImageAction src={file} key={i} onRemove={() => onRemove(i)} />
            ))}
            <input
              type="file"
              name="image"
              id="myImage"
              className="d-none"
              multiple
              ref={filesRef}
              onChange={addImages}
            />
          </div>
          <Button
            variant="contained"
            className="text-none my-3 py-2"
            onClick={onUploadImage}
            style={{ textTransform: "none" }}
          >
            Upload photo
          </Button>
        </div>
        <div>
          <p className="form-title">About home</p>
          <textarea
            name="about_home"
            placeholder="About..."
            id="about_home"
            cols={30}
            rows={5}
            onChange={(e) => {
              formik.setFieldValue("about_home", e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <p className="form-title">About roommates</p>
          <textarea
            name="about_roommate"
            id="about_roommate"
            placeholder="About..."
            cols={30}
            rows={5}
            onChange={(e) => {
              formik.setFieldValue("about_roommate", e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <p className="form-title">About renters</p>
          <textarea
            name="about_renter"
            id="about_renter"
            placeholder="About..."
            cols={30}
            rows={5}
            onChange={(e) => {
              formik.setFieldValue("about_renter", e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <p className="form-title">Layout</p>
          <FormControl className="form-radio">
            <RadioGroup
              aria-labelledby="duration of rent rooms"
              defaultValue=""
              name="layout"
              className="form-amenities"
            >
              {layout.map((item) => {
                return (
                  <FormControlLabel
                    key={item.id}
                    value={item.name}
                    control={<Radio />}
                    label={item.name}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </div>

        <div>
          <p className="form-title">Amenities</p>
          <FormGroup className="form-amenities">
            {amenities.map((option) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleOutlineIcon color="primary" />}
                    />
                  }
                  key={option.key}
                  checked={formik.values.amenities.includes(option.key)}
                  onChange={(e) => {
                    if (formik.values.amenities.includes(option.key)) {
                      const newArr = formik.values.amenities.filter(
                        (key: string) => key !== option.key
                      );
                      formik.setFieldValue("amenities", newArr);
                      console.log("here 1", formik.values);
                    } else {
                      const newArr = [...formik.values.amenities, option.key];
                      let newValue = formik.values.amenities.map(
                        (i: string) => i
                      );
                      newValue.push(option.key);
                      formik.setFieldValue("amenities", newArr);
                      console.log("here 2", formik.values);
                    }
                  }}
                  label={option.name}
                />
              );
            })}
          </FormGroup>
        </div>
        <Button
          type="submit"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            create(formik.values);
          }}
          sx={{
            mt: 3,
            mb: 2,
            p: "15px 25px",
            backgroundColor: "#0032E4",
            borderRadius: "10px",
            fontFamily: "poppins500",
            fontSize: "16px",
            lineHeight: "24px",
            textTransform: "none",
            width: "150px",
          }}
        >
          {isLoading ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};
