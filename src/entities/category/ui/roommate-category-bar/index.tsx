// @ts-nocheck
import { useFormik, Formik } from "formik";
import SelectInput from "src/app/components/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useStyles } from "src/app/assets/style/filter-style";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import "./index.scss";

interface Value {
  age: string;
  gender: string;
  duration: string;
  layout: string;
  inthehome: string;
  location: string;
  price: string;
  room: string;
}
interface Props {
  data: any;
  submit: (args: Value) => void;
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  border: "1px solid #E0E5FC",
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const RoommateCategoryBar = ({ data, submit }: Props) => {
  const classes = useStyles();

  const validate = (values: Value) => {
    const errors: Value = {
      age: "",
      gender: "",
      duration: "",
      layout: "",
      inthehome: "",
      location: "",
      price: "",
      room: "",
    };

    if (!values.location) {
      errors.location = "Required";
    }

    return errors;
  };

  const initialValues = {
    age: "",
    gender: "",
    duration: "",
    layout: "",
    inthehome: "",
    location: "",
    price: "",
    room: "",
  };

  return (
    <div>
      <div className="title">
        <h6>Find renters</h6>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </div>
      <div className="row m-1">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values) => {
            submit(values);
          }}
        >
          {({ handleChange, handleBlur, values, handleSubmit }) => (
            <form className="filter" onSubmit={handleSubmit}>
              {Array.isArray(data) && (
                <div>
                  {data.map((item: any, i) => (
                    <SelectInput
                      options={item.subcategories}
                      name={item.name}
                      key={item.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ))}
                  <TextField
                    id="standard-basic"
                    size="small"
                    label="Price"
                    name="price"
                    variant="outlined"
                    sx={{ width: "120px" }}
                    className={classes.root}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextField
                    id="outlined-number"
                    label="Rooms"
                    sx={{ width: "100px" }}
                    type="number"
                    className={classes.root}
                    size="small"
                    name="room"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      background: "#69A3F9",
                      textTransform: "none",
                      m: "0 10px",
                    }}
                    type="submit"
                    onClick={() => submit(values)}
                  >
                    All
                  </Button>
                </div>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
