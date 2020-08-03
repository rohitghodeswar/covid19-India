import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AppBar from "@material-ui/core/AppBar";

//icons
import LocationCityIcon from "@material-ui/icons/LocationCity";
import AllOutIcon from "@material-ui/icons/AllOut";
import PublicIcon from "@material-ui/icons/Public";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 560,
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    maxHeight: "70px",
    marginBottom: "10px",
  },
}));

const setTabValue = (path) => {
  let pathName = "districts";
  if (window.location.pathname === "/") {
    pathName = "districts";
  }
  if (window.location.pathname === "/states") {
    pathName = "states";
  }
  if (window.location.pathname === "/india") {
    pathName = "india";
  }
  return pathName;
};

const CovidNavigationComponent = () => {
  const classes = useStyles();
  const [locationKeys, setLocationKeys] = useState([]);
  const [value, setValue] = useState("districts");

  const history = useHistory();

  useEffect(() => {
    setValue(setTabValue(window.location.pathname));
    return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          // Handle forward event
          setLocationKeys(([_, ...keys]) => keys);
          setValue(setTabValue(window.location.pathname));
        } else {
          // Handle back event
          setLocationKeys((keys) => [location.key, ...keys]);
          setValue(setTabValue(window.location.pathname));
        }
      }
    });
  }, [locationKeys, history]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="sticky" color="inherit" className={classes.appBar}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          value="districts"
          label="Districts"
          icon={<LocationCityIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/states"
          value="states"
          label="States"
          icon={<AllOutIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/india"
          label="India"
          value="india"
          icon={<PublicIcon />}
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default CovidNavigationComponent;
