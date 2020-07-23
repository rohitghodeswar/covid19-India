import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchCovidStateWiseAction,
  fetchCovidResourceAction,
  fetchCovidZoneAction
} from "../middleware/covid-middleware";

// components
import CovidCardDetail from "./CovidCardDetail";
import CovidSearchComponent from "./CovidSearchComponent";

const CovidStateComponent = () => {

  const { stateWiseData } = useSelector((state) => state.covidStateWiseReducer);
  const { resources, location } = useSelector((state) => state.covidReducer);
  const { zones } = useSelector((state) => state.covidZoneReducer);
  
  let state, state_district, locationData;
  if(location){
    state = location.address.state;
    state_district = location.address.state_district
    locationData = [
      {
        state,
        district: state_district,
      },
    ];
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidStateWiseAction());
    dispatch(fetchCovidResourceAction());
    dispatch(fetchCovidZoneAction());
  }, [dispatch]);

  return (
    <React.Fragment>
      {locationData &&
        locationData.length > 0 &&
        stateWiseData &&
        stateWiseData.length > 0 &&
        resources &&
        resources.length > 0 && (
          <CovidCardDetail
            locationData={locationData}
            covidData={stateWiseData}
            resources={resources}
            cardType="state"
          />
        )}
      {zones &&
        zones.length > 0 &&
        stateWiseData &&
        stateWiseData.length > 0 &&
        resources &&
        resources.length > 0 && (
          <CovidSearchComponent
            zones={zones}
            covidData={stateWiseData}
            resources={resources}
            cardType="state"
          />
        )}
    </React.Fragment>
  );
};

export default CovidStateComponent;
