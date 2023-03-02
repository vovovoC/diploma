import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Amenities() {
  return (
      <div>
         <Autocomplete
          multiple
          id="multiple-limit-tags"
          size="small"
          options={amenities}
          limitTags={2}
          getOptionLabel={(option) => option.name}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
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
      </div>
       
  );
};

const amenities = [
  { name: 'Private bath' },
  { name: 'Paid parking' },
  { name: 'Free parking' },
  { name: 'Elevator' },
  { name: 'Wifi included' },
  { name: 'Private bath' },
  { name: 'Pets welcome' },
  { name: 'Air Conditioning' },
  { name: 'Utilities included' },
  { name: 'Balcony' },
  { name: 'Security system' },
  ];
