// @ts-nocheck
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Gender({changeFilterItem}) {
    const [gender, setGender] = useState('');

    const handleChange = (e) => {
      let newFilter = {gender: undefined};
      if(e.target.value !== ''){
        newFilter.gender = e.target.value;
      }
      changeFilterItem(newFilter);
      setGender(e.target.value);
    };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
    <InputLabel id="demo-select-small">Gender</InputLabel>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={gender}
      label="Gender"
      onChange={handleChange}
    >
      <MenuItem value={""}><em>Prefer not to say</em></MenuItem>
      <MenuItem value={"Female"}>Female</MenuItem>
      <MenuItem value={"Male"}>Male</MenuItem>
    </Select>
  </FormControl>
  );
}