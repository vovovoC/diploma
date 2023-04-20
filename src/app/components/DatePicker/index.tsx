import PropTypes from "prop-types";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { LicenseInfo } from "@mui/x-license-pro";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

const styles = {
  display: "block",
};

LicenseInfo.setLicenseKey("YOUR_LICENSE_KEY");

const useStyles = makeStyles(() => ({
  datePicker: {
    position: "relative",
  },
  styles: {
    cursor: "pointer",
    width: "240px",
  },
  app: {
    position: "absolute",
    width: "100%",
    height: "40px",
    background: "#fff",
    zIndex: 4,
  },
}));

export function DatePickerField({
  fullWidth,
  label,
  className,
  onChange,
  onlyValid,
  readOnly,
  InputProps,
}: any) {
  const classes = useStyles();

  return (
    <div className={classes.datePicker}>
      <DateRangePicker
        appearance="subtle"
        size="md"
        placeholder="date"
        className={classes.styles}
      />
      {/* <div className={classes.app} /> */}
    </div>
  );
}
DatePickerField.defaultProps = {
  fullWidth: false,
  label: null,
  className: "",
  onlyValid: false,
  readOnly: false,
  InputProps: null,
  onChange: () => {},
};
DatePickerField.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.node,
  className: PropTypes.string,
  onlyValid: PropTypes.bool,
  readOnly: PropTypes.bool,
  InputProps: PropTypes.object,
  onChange: PropTypes.func,
};
