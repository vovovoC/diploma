import { FocusEventHandler, useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import "./index.scss";

interface Option {
  id: number | string;
  name: string;
}
interface Props {
  handleChange: (...args: any) => void;
  handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
  options: Option[];
  title: string;
  value: string;
}
export default function SelectField({
  handleChange,
  title,
  options,
  value,
}: Props) {
  const [check, setCheck] = useState<string | number>();
  useEffect(() => {
    setCheck(value);
  }, [value]);
  return (
    <div className="select-field">
      <div className="select-field__title">{title}</div>
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
              className={check === option.id ? "active" : ""}
              key={option.id}
              checked={check === option.id}
              onClick={() => {
                // handleChange(option);
                setCheck(option.id);
              }}
              label={option.name}
            />
          );
        })}
      </FormGroup>
    </div>
  );
}
