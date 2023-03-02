// @ts-nocheck
import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Verified({changeFilterItem}) {
  const handleChange = (e) => {
    let newFilter = {verified: undefined};
    if(e.target.checked !== false){
       newFilter.verified = true;
    }
    changeFilterItem(newFilter);
  };
  return (
    <FormGroup>
      <FormControlLabel  control={<Switch onChange={handleChange}/>} label="Verified" />
    </FormGroup>
  );
}