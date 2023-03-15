// @ts-check
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useStyles } from "../../assets/style/filter-style";
import { FocusEventHandler, ReactNode } from "react";

interface Option {
  id: number | string;
  name: string;
}
interface Props {
  handleChange: (...args: any) => void;
  handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
  options: Option[];
}
export default function SelectInput(props: Props) {
  const classes = useStyles();
  return (
    <FormControl sx={{ minWidth: 130 }} className={classes.root} size="small">
      <InputLabel id="demo-select-small">{props.name}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label={props.name}
        name={props.name}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      >
        {props.options.map((item) => (
          <MenuItem key={item.name} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
