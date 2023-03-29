import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  error: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

interface Props {
  error: any;
}
export function ErrorBoundary({ error }: Props) {
  const classes = useStyles();
  return <div className={classes.error}>{error}</div>;
}
