import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AppBar from "@material-ui/core/AppBar";

//icons
import LocationCityIcon from "@material-ui/icons/LocationCity";
import AllOutIcon from "@material-ui/icons/AllOut";
import PublicIcon from "@material-ui/icons/Public";

import CovidComponent from "./CovidComponent";
import CovidStateComponent from "./CovidStateComponent";
import CovidIndiaComponent from "./CovidIndiaComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 560,
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    maxHeight: "70px",
    marginBottom: "5px"
  },
  title: {
    flexGrow: 2,
  },
  paper: {
    padding: 10,
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  tabLinks: {
    // minWidth: "150px",
  },
}));

const CovidRouteComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
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

      <Switch>
        <Route path="/" exact component={CovidComponent} />
        <Route path="/states" component={CovidStateComponent} />
        <Route path="/india" component={CovidIndiaComponent} />

      </Switch>
    </React.Fragment>
  );
};

export default CovidRouteComponent;
