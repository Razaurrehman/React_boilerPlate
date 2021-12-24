import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  containerHeight: {
    height: "calc(100vh - 200px)"
  },
  dashedBorder: {
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
}));
