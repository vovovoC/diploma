import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loader: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

export function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
}
