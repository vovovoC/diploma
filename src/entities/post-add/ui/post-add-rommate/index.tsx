// @ts-nocheck
import * as React from "react";
import { useFormik } from "formik";
import { useStyles } from "../../../../app/assets/style/filter-style";
import user from "../../../../app/assets/images/user1.png";
import instagram from "../../../../app/assets/icons/instagram.svg";
import telegram from "../../../../app/assets/icons/telegram.svg";
import CommentIcon from "@mui/icons-material/Comment";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
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

const lifestyle = [
  {name: "introverted"},
  {name: "artist/creative"},
  {name: "cleans regularly"},
  {name: "extroverted"},
  {name: "cooks most meals"},
  {name: "current student"},
  {name: "works from home "},
  {name: "health/wealness"},
  {name: "sports fan"},
  {name: "usually not at home "},
  {name: "loves a good party"},
]
const amenities = [
  {name: "Wifi included"},
  {name: "TV"},
  {name: "Air Conditioning"},
  {name: "Furnished"},
  {name: "Pets welcome"},
  {name: "Elevator"},
  {name: "Parking"},
  {name: "Security"},
  {name: "Security camera"}
]

export const RoommateAddPost = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
      <p className="page-title">Add my post</p>
      <form
        className="add-post"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className="user-anketa add-user-anketa">
          <div className="user-anketa-right">
          <div className="right-anketa-header">
            <div className="anketa-header-title">Add post</div>
          </div>
          <div className="anketa-body roommate-anketa-body">
            <table>
              <tr>
                <th>Firstname</th>
                <td>
                  <OutlinedInput id="first-name" placeholder="First Name"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                </td>
              </tr>
              <tr>
                <th>Lastname</th>
                <td>
                  <OutlinedInput id="last-name" placeholder="Last Name"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                </td>
              </tr>
              <tr>
                <th>Age</th>
                <td>
                  <OutlinedInput id="age" placeholder="Age"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                </td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>
                  <Select
                    id="gender"
                    sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}}
                  >
                    <MenuItem value={0}>Female</MenuItem>
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={2}>Prefer not to say</MenuItem>
                  </Select>
                </td>
              </tr>
              <tr>
                <th>About</th>
                <td>
                  <TextField
                    sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", width: "100%"}}
                    id="outlined-multiline-static"
                    placeholder="...text"
                    multiline
                    rows={4}
                  />
                </td>
              </tr>
              <tr>
                <th>Work</th>
                <td>
                  <OutlinedInput id="job" placeholder="Work"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                </td>
              </tr>
              <tr>
                <th>Lifestyle</th>
                <td>
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={lifestyle}
                    getOptionLabel={(option) => option.name}
                    defaultValue={[lifestyle[0]]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Your lifestyle"
                      />
                    )}
                  />
                </td>
              </tr>              
            </table>
            <p className="form-title">I'm looking for a room</p>
            <table>
                <tr>
                  <th>Target date</th>
                  <td>
                    <OutlinedInput id="date" placeholder="Date"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                  </td>
                </tr>
                <tr>
                  <th>Duration</th>
                  <td>
                    <Select
                      id="duration"
                      sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}}
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
                    <OutlinedInput id="price" placeholder="Max budget"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                  </td>
                </tr>   
                <tr>
                  <th>Location</th>
                  <td>
                    <OutlinedInput id="city" placeholder="city"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                  </td>
                </tr>  
                <tr>
                  <th>Layout</th>
                  <td>
                    <Select
                      id="layout"
                      sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}}
                    >
                      <MenuItem value={0}>Entire Place</MenuItem>
                      <MenuItem value={1}>Private Room</MenuItem>
                      <MenuItem value={2}>Shared Room</MenuItem>
                    </Select>
                  </td>
                </tr> 
                <tr>
                  <th>Instagram</th>
                  <td>
                    <OutlinedInput id="instagran" placeholder="Instagram link"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                  </td>
                </tr>
                <tr>
                  <th>Telegram</th>
                  <td>
                    <OutlinedInput id="telegram" placeholder="Telegram link"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                  </td>
                </tr>
                <tr>
                <th>Amenities</th>
                  <td>
                    <Autocomplete
                      multiple
                      id="amenities"
                      options={amenities}
                      getOptionLabel={(option) => option.name}
                      defaultValue={[amenities[0]]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          placeholder="Amenities"
                        />
                      )}
                    />
                  </td>
              </tr> 
            </table>
            </div>
          </div>
          <div className="user-anketa-left add-user-anketa-left">
              <div className="user-anketa-left-card add-user-anketa-left-card">
                <img src={user} alt="User photo" />
                <input type="file" name="img" id="img" />
              </div>
          </div>
        </div>
      </form>
      
    </div>
  );
};
