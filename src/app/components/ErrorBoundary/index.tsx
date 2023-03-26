import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  error: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

export function ErrorBoundary() {
  const classes = useStyles();
  return <div className={classes.error}>error</div>;
}
