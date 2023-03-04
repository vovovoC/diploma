// @ts-nocheck
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Duration({changeFilterItem}) {
    const [ duration, setDuration] = useState('');

    const handleChange = (e) => {
      let newFilter = {duraction: undefined};
      if(e.target.value !== ''){
        newFilter.duraction = e.target.value;
      }
      changeFilterItem(newFilter);
      setDuration(e.target.value);
    };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
    <InputLabel id="demo-select-small">Duration</InputLabel>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={duration}
      label="Duration"
      onChange={handleChange}
    >
      <MenuItem value={""}><em>None</em></MenuItem>
      <MenuItem value={"Flexible"}>Flexible</MenuItem>
      <MenuItem value={"Fixed"}>Fixed</MenuItem>
      <MenuItem value={"12 month"}>12 month</MenuItem>
    </Select>
  </FormControl>
  );
}