import { FocusEventHandler } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import "./index.scss";

interface Option {
  id: number | string;
  name: string;
}
interface Props {
  onChange: (...args: any) => void;
  setCount: (...args: any) => void;
  handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
  options: Option[];
  title: string;
  value: string;
}
export default function SelectField({
  onChange,
  setCount,
  title,
  name,
  options,
  value,
}: Props) {
  return (
    <div className="select-field">
      {title && <div className="select-field__title">{title}</div>}
      <FormGroup className="select-field__content">
        {options.map((option) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon color="primary" />}
                />
              }
              className={value === option.id ? "active" : ""}
              key={option.id}
              checked={value === option.id}
              onClick={() => {
                onChange(name, option.id);
                setCount((prevState: any) => ({
                  ...prevState,
                  [name]: value ? 1 : 0,
                }));
              }}
              label={option.name}
            />
          );
        })}
      </FormGroup>
    </div>
  );
}
