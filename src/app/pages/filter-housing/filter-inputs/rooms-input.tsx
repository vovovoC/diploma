// @ts-nocheck
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Rooms({changeFilterItem}) {
  const handleChange = (e) => {
    console.log(e.target.value)
    let newFilter = {rooms: undefined};
    if(e.target.value !== ''){
      newFilter.rooms = Number(e.target.value);
    }
    changeFilterItem(newFilter);
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-number"
          label="Rooms"
          type="number"
          size="small"
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}