import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const CovidAlertMessage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={true} autoHideDuration={6000}>
        <Alert severity="error">Your location detected - not in India. Currently this app is not avialable for your location.</Alert>
      </Snackbar>
    </div>
  );
};

export default CovidAlertMessage;
