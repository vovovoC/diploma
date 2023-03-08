// @ts-nocheck
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectInput(props) {
  const [state, setState] = useState('');
  const handleChange = (e) => {
    // let name = props.name.toLowerCase();
    // let newFilter = {name: undefined};
    // if(e.target.value !== 0){
    //   newFilter.category = e.target.value;
    // }
    // props.filter(newFilter);
    console.log(e.target.value);
    setState(e.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
    <InputLabel id="demo-select-small">{props.name}</InputLabel>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={state}
      label={props.name}
      onChange={handleChange}
    >
        {
            props.options.map(item => <MenuItem key={item.name} value={item.id}>{item.name}</MenuItem>)
        }
    </Select>
  </FormControl>
  );
}