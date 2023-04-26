import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { LicenseInfo } from "@mui/x-license-pro";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

LicenseInfo.setLicenseKey("YOUR_LICENSE_KEY");

const useStyles = makeStyles(() => ({
  datePicker: {
    position: "relative",
  },
  styles: {
    cursor: "pointer",
    width: "240px",
  },
}));

export function DatePickerField({ onChange, readOnly, initialValue }: any) {
  const classes = useStyles();

  return (
    <div className={classes.datePicker}>
      <DateRangePicker
        appearance="subtle"
        size="md"
        placeholder="date"
        disabled={readOnly}
        value={initialValue}
        className={classes.styles}
        onChange={onChange}
      />
    </div>
  );
}
DatePickerField.defaultProps = {
  initialValue: new Date(),
  readOnly: false,
  onChange: () => {},
};
DatePickerField.propTypes = {
  initialValue: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};
