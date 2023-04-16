import { useFormik } from "formik";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import BackButton from "../../../../app/components/BackButton";
import "./index.scss";
import { Loader } from "../../../../app/components/Loader";
import ImageAction from "../../../../app/components/ImageAction";
import React from "react";

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

  const validate = (values: any) => {
    const errors: any = {
      ...initialValues,
    };

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values, "VAL");
    },
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
      <p className="page-title">Add post</p>
      <form className="add-post">
        <FormControl
          sx={{ width: { md: 500, s: 500, xs: "95%" } }}
          size="small"
        >
          <label>City</label>
          <Select
            placeholder="Add city"
            sx={{
              background: "#FFFFFF",
              border: "1px solid #D9D9D9",
              color: "#808494",
              borderRadius: "6px",
            }}
            id="city"
            error={!!formik.errors.city} // @ts-ignore
            helpertext={formik.errors.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          >
            <MenuItem value={1}>Almaty</MenuItem>
            <MenuItem value={2}>Astana</MenuItem>
            <MenuItem value={3}>Shymkent</MenuItem>
            <MenuItem value={4}>Abayskaya area</MenuItem>
            <MenuItem value={5}>Aktubinskaya area</MenuItem>
            <MenuItem value={6}>Abayskaya area</MenuItem>
            <MenuItem value={7}>Akmolinskaya area</MenuItem>
            <MenuItem value={8}>Aktubinskaya area</MenuItem>
          </Select>
        </FormControl>

        <div className="add-post-container">
          <FormControl>
            <label htmlFor="street">Street or microdistrict</label>
            <OutlinedInput
              id="street"
              name="street"
              error={!!formik.errors.street} // @ts-ignore
              helpertext={formik.errors.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
              placeholder="ex. Baitursynova"
              sx={{
                background: "#FFFFFF",
                border: "1px solid #D9D9D9",
                color: "#808494",
                borderRadius: "6px",
                height: 40,
              }}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="home">№ of house</label>
            <OutlinedInput
              id="home"
              name="home"
              error={!!formik.errors.home} // @ts-ignore
              helpertext={formik.errors.home}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ex. 5"
              sx={{
                background: "#FFFFFF",
                border: "1px solid #D9D9D9",
                color: "#808494",
                borderRadius: "6px",
                height: 40,
              }}
            />
          </FormControl>
        </div>

        <div>
          <p className="form-title">
            Be sure to specify the location on the map
          </p>
          <div className="form-map"></div>
        </div>

        <div>
          <p className="form-title">Available date and duration</p>
          <div className="form-radio">
            <div>
              <input type="radio" id="date1" name="date" value="flexible" />
              <label htmlFor="date1">
                <p className="radio-title">Flexible</p>
                <p className="radio-desc">
                  Keep the move-out date open for now
                </p>
              </label>
            </div>
            <div>
              <input type="radio" id="date2" name="date" value="fixed" />
              <label htmlFor="date2">
                <p className="radio-title">Fixed</p>
                <p className="radio-desc">
                  Only available between specific dates
                </p>
              </label>
            </div>
            <div>
              <input type="radio" id="date3" name="date" value="month" />
              <label htmlFor="date3">
                <p className="radio-title">12 months</p>
                <p className="radio-desc">An annual commitment is required</p>
              </label>
            </div>
          </div>
        </div>

        <div>
          <p className="form-title">Layout</p>
          <div className="add-post-container">
            <FormControl>
              <label htmlFor="bedroom_nums">Total Bedrooms</label>
              <OutlinedInput
                id="bedroom_nums"
                placeholder="ex. 1"
                name="bedroom_nums"
                error={!!formik.errors.bedroom_nums} // @ts-ignore
                helpertext={formik.errors.bedroom_nums}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid #D9D9D9",
                  color: "#808494",
                  borderRadius: "6px",
                  height: 40,
                  width: "100%",
                }}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="home">Total Bathrooms</label>
              <OutlinedInput
                id="home"
                placeholder="ex. 2"
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid #D9D9D9",
                  color: "#808494",
                  borderRadius: "6px",
                  height: 40,
                  width: "100%",
                }}
              />
            </FormControl>
          </div>
          <div className="add-post-container">
            <FormControl>
              <label htmlFor="street">Floor</label>
              <OutlinedInput
                id="street"
                placeholder="ex. 3"
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid #D9D9D9",
                  color: "#808494",
                  borderRadius: "6px",
                  height: 40,
                  width: "100%",
                }}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="home">Square area, m2</label>
              <OutlinedInput
                id="home"
                placeholder="ex. 50"
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid #D9D9D9",
                  color: "#808494",
                  borderRadius: "6px",
                  height: 40,
                  width: "100%",
                }}
              />
            </FormControl>
          </div>
        </div>
        <div>
          <p className="form-title">Upload Photos</p>
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
        </div>
        <div>
          <p className="form-title">About home</p>
          <textarea
            name="home-desc"
            id="home-desc"
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <div>
          <p className="form-title">About roommates</p>
          <textarea
            name="roommate-desc"
            id="roommate-desc"
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <div>
          <p className="form-title">About renters</p>
          <textarea
            name="renter-desc"
            id="roommate-desc"
            cols={30}
            rows={5}
          ></textarea>
        </div>

        <div>
          <p className="form-title">Layout</p>
          <div className="form-radio form-layout">
            <div>
              <input type="radio" id="entire" name="layout" value="entire" />
              <label htmlFor="entire">Entire Place</label>
            </div>
            <div>
              <input type="radio" id="private" name="layout" value="private" />
              <label htmlFor="private">Private Room</label>
            </div>
            <div>
              <input type="radio" id="shared" name="layout" value="shared" />
              <label htmlFor="shared">Shared Room</label>
            </div>
          </div>
        </div>

        <div>
          <p className="form-title">Amenities</p>
          <div className="form-radio form-layout form-amenities">
            <div>
              <input type="checkbox" id="wifi" name="amenities" value="wifi" />
              <label htmlFor="wifi">Wifi included</label>
            </div>
            <div>
              <input type="checkbox" id="tv" name="amenitie" value="tv" />
              <label htmlFor="tv">TV</label>
            </div>
            <div>
              <input type="checkbox" id="air" name="amenitie" value="air" />
              <label htmlFor="air">Air Conditioning</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="furnished"
                name="amenitie"
                value="furnished"
              />
              <label htmlFor="furnished">Furnished</label>
            </div>
            <div>
              <input type="checkbox" id="pets" name="amenitie" value="pets" />
              <label htmlFor="pets">Pets welcome</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="elevator"
                name="amenitie"
                value="elevator"
              />
              <label htmlFor="elevator">Elevator</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="parking"
                name="amenitie"
                value="parking"
              />
              <label htmlFor="parking">Parking</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="security"
                name="amenitie"
                value="security"
              />
              <label htmlFor="security">Security</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="camera"
                name="amenitie"
                value="camera"
              />
              <label htmlFor="camera">Security camera</label>
            </div>
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
