import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import { makeStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

import CovidRouteComponent from "./components/CovidRouteComponent";

//utils
import { usePosition } from "use-position";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "640px",
    margin: "0 auto",
  },
  title: {
    flexGrow: 1,
  },
  rootPaper: {
    boxShadow: "none",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.covidReducer);
  const [darkState, setDarkState] = useState(false);
  const watch = true;
  const { latitude, longitude } = usePosition(watch);

  const palletType = darkState ? "dark" : "light";
  const theme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/reverse.php?key=86272126cb2b4c&lat=${latitude}&lon="${longitude}&format=json`
      );
      dispatch({
        type: "GET_CURRENT_LOCATION",
        payload: response.data,
      });
    };
    if (latitude && longitude) {
      fetchData();
    }
  }, [dispatch, latitude, longitude]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper className={classes.rootPaper}>
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <AppBar position="static">
                <Toolbar>
                  <Typography className={classes.title} variant="h6" noWrap>
                    COVID-19
                  </Typography>
                  <div className={classes.search}>
                    <Switch checked={darkState} onChange={handleThemeChange} />
                  </div>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12}>
              {location && <CovidRouteComponent />}
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
