import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const CovidDistrictComponet = lazy(() =>
  import("./../pages/CovidDistrictComponet")
);
const CovidStateComponent = lazy(() =>
  import("./../pages/CovidStateComponent")
);
const CovidIndiaComponent = lazy(() =>
  import("./../pages/CovidIndiaComponent")
);

const Loading = () => {
  return "";
};

const CovidRouteComponent = () => {
  return (
    <React.Fragment>
      <Switch>
        <React.Suspense fallback={<Loading />}>
          <Route exact path="/" component={CovidDistrictComponet} />
          <Route path="/states" component={CovidStateComponent} />
          <Route path="/india" component={CovidIndiaComponent} />
        </React.Suspense>
      </Switch>
    </React.Fragment>
  );
};

export default React.memo(CovidRouteComponent);
