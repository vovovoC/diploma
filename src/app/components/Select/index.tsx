// @ts-nocheck
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useStyles} from "../../assets/style/filter-style";


export default function SelectInput(props) {
  const [state, setState] = useState('');
  const classes = useStyles();
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 130}} className={classes.root} size="small">
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