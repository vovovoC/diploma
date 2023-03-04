// @ts-nocheck
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Price({changeFilterItem}) {
  const handleChange = (e) => {
    console.log(e.target.value)
    let newFilter = {price: undefined};
    if(e.target.value !== ''){
      newFilter.price = Number(e.target.value);
    }
    changeFilterItem(newFilter);
  };
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { width: '15ch' },
    }}
    noValidate
    onChange={handleChange}
    autoComplete="off"
  >
    <TextField id="standard-basic" size="small" label="Price (тг)" variant="outlined" />
  </Box>
  );
}