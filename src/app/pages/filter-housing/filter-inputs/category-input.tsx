// @ts-nocheck
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Category({changeFilterItem}) {
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
      let newFilter = {category: undefined};
      if(e.target.value !== ''){
        newFilter.category = e.target.value;
      }
      changeFilterItem(newFilter);
      setCategory(e.target.value);
    };
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
    <InputLabel id="demo-select-small">Category</InputLabel>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={category}
      label="Category"
      onChange={handleChange}
    >
      <MenuItem value={""}><em>None</em></MenuItem>
      <MenuItem value={"Room"}>Room</MenuItem>
      <MenuItem value={"Appartement"}>Appartement</MenuItem>
    </Select>
  </FormControl>
  );
}