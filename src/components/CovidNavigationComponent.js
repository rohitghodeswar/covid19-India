import React from "react";
import { Link } from "react-router-dom";

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

const CovidNavigationComponent = () => {
  const classes = useStyles();
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

  const [value, setValue] = React.useState(pathName);

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
