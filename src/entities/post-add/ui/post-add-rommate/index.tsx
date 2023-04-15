import * as React from "react";
import { useFormik } from "formik";
import user from "../../../../app/assets/images/user1.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

import BackButton from "../../../../app/components/BackButton";
import "./index.scss";
import { Loader } from "../../../../app/components/Loader";
import ImageAction from "../../../../app/components/ImageAction";
interface Value {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  about: string;
  lifestyle: string[];
  work: string;
  location: string;
  duration: string;
  max_price: number;
  layout: string;
  target_date: string;
}

const lifestyle = [
  { name: "introverted" },
  { name: "artist/creative" },
  { name: "cleans regularly" },
  { name: "extroverted" },
  { name: "cooks most meals" },
  { name: "current student" },
  { name: "works from home " },
  { name: "health/wealness" },
  { name: "sports fan" },
  { name: "usually not at home " },
  { name: "loves a good party" },
];
const amenities = [
  { name: "Wifi included" },
  { name: "TV" },
  { name: "Air Conditioning" },
  { name: "Furnished" },
  { name: "Pets welcome" },
  { name: "Elevator" },
  { name: "Parking" },
  { name: "Security" },
  { name: "Security camera" },
];

interface Props {
  create: (values: Value) => void;
  isLoading: boolean;
  initialValues: Value;
}

export const RoommateAddPost = ({
  create,
  isLoading,
  initialValues,
}: Props) => {
  const validate = (values: Value) => {
    const errors: Record<any, string> = {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      about: "",
      work: "",
      location: "",
      max_price: "",
      duration: "",
      target_date: "",
    };

    return errors;
  };
  const [files, setFiles] = React.useState<any>([]);
  const filesRef = React.useRef<any>(null);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {},
  });

  const addImages = (e: any) => {
    //const selectedFIles: string[] = [];
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

      formik.setFieldValue("image", [...files]);
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

  return (
    <div className="wrapper addPost">
      <BackButton name="home" />
      <p className="page-title">Add my post</p>
      <form className="add-post">
        <div className="user-anketa add-user-anketa">
          <div className="user-anketa-right add-roommate-post-right">
            <div className="right-anketa-header">
              <div className="anketa-header-title">Add post</div>
            </div>
            <div className="anketa-body roommate-anketa-body">
              <table className="add-roommate-post">
                <tbody>
                  <tr>
                    <th>Firstname</th>
                    <td>
                      <OutlinedInput
                        id="firstname"
                        placeholder="First Name"
                        fullWidth
                        name="firstname"
                        error={!!formik.errors.firstname} // @ts-ignore
                        helpertext={formik.errors.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Lastname</th>
                    <td>
                      <OutlinedInput
                        id="lastname"
                        placeholder="Last Name"
                        fullWidth
                        name="lastname"
                        error={!!formik.errors.lastname} // @ts-ignore
                        helpertext={formik.errors.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td>
                      <OutlinedInput
                        id="age"
                        placeholder="Age"
                        name="age"
                        type="number"
                        error={!!formik.errors.age} // @ts-ignore
                        helpertext={formik.errors.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>
                      <Select
                        id="gender"
                        name="gender"
                        error={!!formik.errors.gender} // @ts-ignore
                        helpertext={formik.errors.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      >
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="prefer_not_to_say">
                          Prefer not to say
                        </MenuItem>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <th>About</th>
                    <td>
                      <TextField
                        name="about"
                        error={!!formik.errors.about} // @ts-ignore
                        helpertext={formik.errors.about}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.about}
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          width: "100%",
                        }}
                        id="about"
                        placeholder="...text"
                        multiline
                        rows={4}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Work</th>
                    <td>
                      <OutlinedInput
                        id="work"
                        placeholder="Work"
                        name="work"
                        error={!!formik.errors.work} // @ts-ignore
                        helpertext={formik.errors.work}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.work}
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Instagram</th>
                    <td>
                      <OutlinedInput
                        id="instagram"
                        placeholder="Instagram link"
                        name="instagram"
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Telegram</th>
                    <td>
                      <OutlinedInput
                        id="telegram"
                        placeholder="Telegram link"
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Lifestyle</th>
                    <td>
                      <Autocomplete
                        multiple
                        id="lifestyle"
                        onChange={(value, newValue) => {
                          const str = newValue
                            .map((item) => {
                              return item.name;
                            })
                            .join();
                          formik.setFieldValue("lifestyle", str);
                        }}
                        onBlur={formik.handleBlur}
                        options={lifestyle}
                        getOptionLabel={(option) => option.name}
                        defaultValue={[lifestyle[0]]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            key={params.id}
                            variant="standard"
                            placeholder="Your lifestyle"
                          />
                        )}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="form-title">I'm looking for a room</p>
              <table className="add-roommate-post">
                <tbody>
                  <tr>
                    <th>Target date</th>
                    <td>
                      <OutlinedInput
                        id="target_date"
                        name="target_date"
                        error={!!formik.errors.target_date} // @ts-ignore
                        helpertext={formik.errors.target_date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.target_date}
                        placeholder="Date"
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Duration</th>
                    <td>
                      <Select
                        id="duration"
                        name="duration"
                        error={!!formik.errors.duration} // @ts-ignore
                        helpertext={formik.errors.duration}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.duration}
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      >
                        <MenuItem value={0}>Flexible</MenuItem>
                        <MenuItem value={1}>Fixed</MenuItem>
                        <MenuItem value={2}>12 months</MenuItem>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <th>Max budget</th>
                    <td>
                      <OutlinedInput
                        id="max_price"
                        name="max_price"
                        error={!!formik.errors.max_price} // @ts-ignore
                        helpertext={formik.errors.max_price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.max_price}
                        placeholder="Max budget"
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>
                      <OutlinedInput
                        id="location"
                        name="location"
                        error={!!formik.errors.location} // @ts-ignore
                        helpertext={formik.errors.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                        placeholder="location"
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Layout</th>
                    <td>
                      <Select
                        id="layout"
                        name="layout"
                        error={!!formik.errors.layout} // @ts-ignore
                        helpertext={formik.errors.layout}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.layout}
                        sx={{
                          background: "#FFFFFF",
                          border: "0px solid transparent",
                          borderRadius: "6px",
                          height: 30,
                          width: "100%",
                        }}
                      >
                        <MenuItem value={0}>Entire Place</MenuItem>
                        <MenuItem value={1}>Private Room</MenuItem>
                        <MenuItem value={2}>Shared Room</MenuItem>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <th>Amenities</th>
                    <td>
                      <Autocomplete
                        multiple
                        id="amentetiies"
                        onChange={(value, newValue) => {
                          const str = newValue
                            .map((item) => {
                              return item.name;
                            })
                            .join();
                          formik.setFieldValue("amentetiies", str);
                        }}
                        options={amenities}
                        getOptionLabel={(option) => option.name}
                        defaultValue={[amenities[0]]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            key={params.id}
                            variant="standard"
                            placeholder="Amenities"
                          />
                        )}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="user-anketa-left add-user-anketa-left">
            <div className="user-anketa-left-card add-user-anketa-left-card mx-auto">
              {files.map((file: string, i: number) => (
                <ImageAction
                  src={file}
                  key={i}
                  className="w-100"
                  onRemove={() => onRemove(i)}
                />
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
              <Button
                variant="contained"
                className="text-none my-3 py-2"
                onClick={onUploadImage}
                style={{ textTransform: "none" }}
              >
                Upload photo
              </Button>
            </div>
          </div>
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              create(formik.values);
            }}
            sx={{
              width: "100px",
            }}
          >
            {isLoading ? <Loader /> : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};
