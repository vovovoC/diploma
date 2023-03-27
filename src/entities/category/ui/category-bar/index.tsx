// @ts-nocheck
import SelectInput from "../../../../app/components/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useStyles } from "../../../../app/assets/style/filter-style";
import "./index.scss";

interface Props {
  data: any;
  formik: any;
}
export const CategoryBar = ({ data, formik }: Props) => {
  const classes = useStyles();

  return (
    <div>
      <div className="title">
        <h6>Search properties or room</h6>
        <input
          type="search"
          className="search"
          name="user-search"
          id="user-search"
        />
      </div>
      <div className="row m-3">
        <form
          className="filter"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          {Array.isArray(data) && (
            <div>
              {data.map((item: any) => (
                <SelectInput
                  options={item.subcategories}
                  name={item.name}
                  key={item.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              ))}
              <TextField
                id="standard-basic"
                size="small"
                label="Price (tg)"
                name="price"
                variant="outlined"
                sx={{ width: "120px" }}
                className={classes.root}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <TextField
                id="outlined-number"
                label="Rooms"
                sx={{ width: "100px" }}
                type="number"
                className={classes.root}
                size="small"
                name="room"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Button
                variant="contained"
                sx={{
                  background: "#69A3F9",
                  textTransform: "none",
                  m: "0 10px",
                }}
                type="submit"
              >
                All
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
