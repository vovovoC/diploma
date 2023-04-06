// @ts-nocheck
import * as React from "react";
import { useFormik } from "formik";
import { useStyles } from "../../../../app/assets/style/filter-style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import BackButton from "../../../../app/components/BackButton";
import "./index.scss";
interface Value {
  city: string;
}


export const RoomAddPost = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const validate = (values: Value) => {
    const errors: Value = {
      city: "",
    };

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      city: "",
    },
    validate,
    onSubmit: (values) => {
      //dispatch(fetchRegister(values)); 
    },
    });

  return (
    <div className="wrapper addPost">
      <BackButton name="home"/>
      <p className="page-title">Add post</p>
      <form
        className="add-post"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        {/* <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Username or email address"
          name="email"
          autoComplete="email"
          autoFocus
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        /> */}
      <FormControl sx={{ width: 500 }} size="small">
        <label>Add city</label>
        <Select
          placeholder="City"
          sx={{background: "#FFFFFF", border: "1px solid #D9D9D9", color: "#808494", borderRadius: "6px"}}
          id="city"
          name="city"
          error={!!formik.errors.city}
          helperText={formik.errors.city}
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
        <FormControl >
          <label for="street">Street or microdistrict</label>
          <OutlinedInput id="street" placeholder="ex. Baitursynova"   sx={{background: "#FFFFFF", border: "1px solid #D9D9D9", color: "#808494", borderRadius: "6px", height: 40}} />
        </FormControl>
        <FormControl>
          <label for="home">№ of house</label>
          <OutlinedInput id="home" placeholder="ex. 5"   sx={{background: "#FFFFFF", border: "1px solid #D9D9D9", color: "#808494", borderRadius: "6px", height: 40}}/>
        </FormControl>
      </div>
      
      <div>
        <p className="form-title">Be sure to specify the location on the map</p>
        <div className="form-map"></div>
      </div>

      <div>
        <p className="form-title">Available date and duration</p>
        <div className="form-radio">
          <div>
             <input type="radio" id="date1" name="date" value="flexible"/>
            <label for="date1">
              <p className="radio-title">Flexible</p>
              <p className="radio-desc">Keep the move-out date open for now</p>
            </label>
          </div>
          <div>
            <input type="radio" id="date2" name="date" value="fixed"/>
            <label for="date2">
              <p className="radio-title">Fixed</p>
              <p className="radio-desc">Only available between specific dates</p>
            </label>
          </div>
          <div>
            <input type="radio" id="date3" name="date" value="month"/>
            <label for="date3">
              <p className="radio-title">12 months</p>
              <p className="radio-desc">An annual commitment is required</p>
            </label>
          </div>
        </div>
      </div>

      <div>
      <p className="form-title">Layout</p>
        <div className="add-post-container">
          <FormControl >
            <label for="street">Total Bedrooms</label>
            <OutlinedInput id="street" placeholder="ex. 1"   sx={{background: "#FFFFFF", border: "1px solid #D9D9D9", color: "#808494", borderRadius: "6px", height: 40}} />
          </FormControl>
          <FormControl>
            <label for="home">Total Bathrooms</label>
            <OutlinedInput id="home" placeholder="ex. 2"   sx={{background: "#FFFFFF", border: "1px solid #D9D9D9", color: "#808494", borderRadius: "6px", height: 40}}/>
          </FormControl>
        </div>
        <div className="add-post-container">
          <FormControl >
            <label for="street">Floor</label>
            <OutlinedInput id="street" placeholder="ex. 3"   sx={{background: "#FFFFFF", border: "1px solid #D9D9D9", color: "#808494", borderRadius: "6px", height: 40}} />
          </FormControl>
          <FormControl>
            <label for="home">Square area, m2</label>
            <OutlinedInput id="home" placeholder="ex. 50"   sx={{background: "#FFFFFF", border: "1px solid #D9D9D9", color: "#808494", borderRadius: "6px", height: 40}}/>
          </FormControl>
        </div>
      </div>

      <div>
        <p className="form-title">Show off your place</p>
        <input type="file" name="photo" id="photo" placeholder="Upload photo"/>
      </div>
      <div>
        <p className="form-title">About home</p>
        <textarea name="home-desc" id="home-desc" cols="30" rows="5"></textarea>
      </div>
      <div>
        <p className="form-title">About roommates</p>
        <textarea name="roommate-desc" id="roommate-desc" cols="30" rows="5"></textarea>
      </div>
      <div>
        <p className="form-title">About renters</p>
        <textarea name="renter-desc" id="roommate-desc" cols="30" rows="5"></textarea>
      </div>

      <div>
        <p className="form-title">Layout</p>
        <div className="form-radio form-layout">
          <div>
            <input type="radio" id="entire" name="layout" value="entire"/>
            <label for="entire">Entire Place</label>
          </div>
          <div>
            <input type="radio" id="private" name="layout" value="private"/>
            <label for="private">Private Room</label>
          </div>
          <div>
            <input type="radio" id="shared" name="layout" value="shared"/>
            <label for="shared">Shared Room</label>
          </div>
        </div>
      </div>

      <div>
        <p className="form-title">Amenities</p>
        <div className="form-radio form-layout form-amenities">
          <div>
            <input type="checkbox" id="wifi" name="amenities" value="wifi"/>
            <label for="wifi">Wifi included</label>
          </div>
          <div>
            <input type="checkbox" id="tv" name="amenitie" value="tv"/>
            <label for="tv">TV</label>
          </div>
          <div>
            <input type="checkbox" id="air" name="amenitie" value="air"/>
            <label for="air">Air Conditioning</label>
          </div>
          <div>
            <input type="checkbox" id="furnished" name="amenitie" value="furnished"/>
            <label for="furnished">Furnished</label>
          </div>
          <div>
            <input type="checkbox" id="pets" name="amenitie" value="pets"/>
            <label for="pets">Pets welcome</label>
          </div>
          <div>
            <input type="checkbox" id="elevator" name="amenitie" value="elevator"/>
            <label for="elevator">Elevator</label>
          </div>
          <div>
            <input type="checkbox" id="parking" name="amenitie" value="parking"/>
            <label for="parking">Parking</label>
          </div>
          <div>
            <input type="checkbox" id="security" name="amenitie" value="security"/>
            <label for="security">Security</label>
          </div>
          <div>
            <input type="checkbox" id="camera" name="amenitie" value="camera"/>
            <label for="camera">Security camera</label>
          </div>
        </div>
      </div>
        {/* <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            p: "15px 0",
            backgroundColor: "#0032E4",
            borderRadius: "10px",
            fontFamily: "poppins500",
            fontSize: "16px",
            lineHeight: "24px",
            textTransform: "none",
          }}
        >
          Submit
        </Button> */}
      </form>
      
    </div>
  );
};
