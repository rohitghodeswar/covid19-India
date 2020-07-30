import React from "react";
import { Route, Switch } from "react-router-dom";

import CovidDistrictComponet from "./../pages/CovidDistrictComponet";
import CovidStateComponent from "./../pages/CovidStateComponent";
import CovidIndiaComponent from "./../pages/CovidIndiaComponent";

const CovidRouteComponent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={CovidDistrictComponet} />
        <Route path="/states" component={CovidStateComponent} />
        <Route path="/india" component={CovidIndiaComponent} />
      </Switch>
    </React.Fragment>
  );
};

export default CovidRouteComponent;
