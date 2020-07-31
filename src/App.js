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

// components
import CovidRouteComponent from "./routes/CovidRouteComponent";
import CovidNavigationComponent from "./components/CovidNavigationComponent";

//utils
import { useDispatch } from "react-redux";

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
    padding: "5px",
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
  const [darkState, setDarkState] = useState(false);

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
    const fetchData = async (latitude, longitude) => {
      dispatch({
        type: "GET_COVID_LOADING_REQUEST",
      });

      const lat = latitude;
      const long = longitude;
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=63a872e5fe20495c9ee636dbd2207aff`;
      const response = await axios.get(url);
      if (response.data) {
        const { components } = response.data.results[0];
        if (components.country !== "India") {
          getGeoInfo();
        } else {
          const location = [
            {
              state: components.state,
              district: components.city || components.state_district,
              country: components.country,
              state_code: components.state_code,
            },
          ];
          dispatch({
            type: "GET_CURRENT_LOCATION",
            payload: location,
          });
          dispatch({
            type: "GET_COVID_LOADING_SUCCESS",
          });
        }
      }
    };

    const success = (pos) => {
      if (pos && pos.coords) {
        const { latitude, longitude } = pos.coords;
        fetchData(latitude, longitude);
      }
    };

    const getGeoInfo = () => {
      axios
        .get("https://ipapi.co/json/")
        .then((response) => {
          const { country_name, region, region_code, city } = response.data;
          const location = [
            {
              state: region,
              district: city,
              country: country_name,
              state_code: region_code,
            },
          ];
          dispatch({
            type: "GET_CURRENT_LOCATION",
            payload: location,
          });
          dispatch({
            type: "GET_COVID_LOADING_SUCCESS",
          });
          // fetchData(latitude, longitude);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const error = () => {
      getGeoInfo();
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, [dispatch]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper className={classes.rootPaper}>
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <AppBar position="static">
                <Toolbar>
                  <Typography className={classes.title} variant="h6" noWrap>
                    COVID-19 INDIA
                  </Typography>
                  <div className={classes.search}>
                    <Switch checked={darkState} onChange={handleThemeChange} />
                  </div>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12}>
              <CovidNavigationComponent />
              <CovidRouteComponent />
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
