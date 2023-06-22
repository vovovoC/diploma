import "./index.scss";
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';

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

interface Props {
    fn: () => void;
 }
export const EditAnketa = ({fn } : Props) => {
  return (
      <div className="anketa edit-anketa">
        <div className="anketa-header">
          <div>Profile details</div>
          <button className="cnf-card-close" title="Close" onClick={() => fn()}><CloseIcon sx={{color: "white"}}/></button>
        </div>
        <div className="anketa-body edit-anketa-body">
          <table className="edit-anketa-table">
             <tbody>
              <tr>
                <th>Firstname</th>
                <td>
                  <OutlinedInput id="first-name" placeholder="First Name"  sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} onChange={(e)=>{
                      
                  }}/>
                </td>
              </tr>
              <tr>
                <th>Lastname</th>
                <td>
                  <OutlinedInput id="last-name" placeholder="Last Name" defaultValue="Alzhan"  sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                </td>
              </tr>
              <tr>
                <th>Age</th>
                <td>
                  <OutlinedInput id="age" placeholder="Age" defaultValue="24"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                </td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>
                  <Select
                    id="gender"
                    value="Female"
                    sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}}
                  >
                    <MenuItem value={0}>Female</MenuItem>
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={2}>Prefer not to say</MenuItem>
                  </Select>
                </td>
              </tr>
              <tr>
                <th>Work</th>
                <td>
                  <OutlinedInput id="job" defaultValue="Manager" placeholder="Work"   sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                </td>
              </tr>
              <tr>
                <th>University</th>
                <td>
                  <OutlinedInput id="university" placeholder="University" defaultValue="Al-Farabi"  sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                </td>
              </tr>
              <tr>
                <th>About</th>
                <td>
                  <TextField
                    sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", width: "100%"}}
                    id="outlined-multiline-static"
                    defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                    placeholder="...text"
                    multiline
                    rows={4}
                  />
                </td>
              </tr>
              <tr>
                  <th>Phone</th>
                  <td>
                    <OutlinedInput id="phone" placeholder="Phone number" defaultValue="+7 707 855 2200"  sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                  </td>
              </tr>
              <tr>
                  <th>Instagram</th>
                  <td>
                    <OutlinedInput id="instagram" placeholder="Instagram link" defaultValue="@madinkalzh"  sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                  </td>
              </tr>
              <tr>
                  <th>Telegram</th>
                  <td>
                    <OutlinedInput id="telegram" placeholder="Telegram link"  defaultValue="@madinkalzh" sx={{background: "#FFFFFF",border: "0px solid transparent", borderRadius: "6px", height: 30, width: "100%"}} />
                  </td>
              </tr>
              <tr>
                  <th>Upload image</th>
                  <td>
                    <input type="file" name="img" id="img" />
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
                    defaultValue={[lifestyle[1],lifestyle[3], lifestyle[7]]}
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
              <tr>
                <th></th>
                <td><button title="Edit anketa" className="save-btn">Save</button></td>
              </tr>
             </tbody>
          </table>
        </div>
      </div>
    );
};
