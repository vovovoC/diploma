// @ts-nocheck
import { useState } from "react";
import Data from "./Data";
import {duration} from '../../shared/filter';
import {city} from '../../shared/filter';
import {gender} from '../../shared/filter';
import {amenities} from '../../shared/filter';
import {housingCategory} from '../../shared/filter';
import SelectInput from '../../components/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

let filterItem = {};
const Buttons = ({filter, setItem}) => {
  const [filterElem, setfilterElem] = useState(filterItem);

  // const changeFilterItem = (obj) => {
  //   const newFilterElem = filterElem;
  //    Object.entries(obj).map(([key, value]) => {
  //       newFilterElem[key] = value;
  //     });
  //     setfilterElem(newFilterElem);
  //     filter(newFilterElem);
      
  // };
  const citys = city.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
       <Autocomplete id="city" size="small" sx={{ width: 150}} getOptionLabel={(option) => option.name}
          options={citys.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          renderInput={(params) => <TextField {...params}  label="City"/>}
        />
        <SelectInput options={housingCategory} name="Category"/>
        <TextField id="standard-basic" size="small" label="Price (тг)" variant="outlined" />
        <SelectInput options={gender} name="Gender"/>
        <SelectInput options={duration} name="Duration"/>
        <FormControlLabel  control={<Switch/>} label="Verified" />
        <Autocomplete multiple id="multiple-limit-tags" size="small" options={amenities} limitTags={2} getOptionLabel={(option) => option.name}
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
            <TextField {...params} label="Amenities" placeholder="Amenities"/>
          )}
          sx={{ m: 1, width: '500px' }}
        />
        <TextField id="outlined-number" label="Rooms" type="number" size="small"/>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="contained"  onClick={() => setItem(Data)}>All</Button>
        </Box>
      </div>
    </>
  );
};
export default Buttons;



