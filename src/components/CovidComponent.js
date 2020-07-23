import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchCovidDataAction,
  fetchCovidResourceAction,
  fetchCovidZoneAction,
} from "../middleware/covid-middleware";

// components
import CovidCardDetail from "./CovidCardDetail";
import CovidSearchComponent from "./CovidSearchComponent";

const CovidComponent = () => {
  const { covidData, resources, location } = useSelector(
    (state) => state.covidReducer
  );
  const { state, state_district } = location && location.address;

  const { zones } = useSelector((state) => state.covidZoneReducer);
  const locationData = [
    {
      state,
      district: state_district,
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidDataAction());
    dispatch(fetchCovidResourceAction());
    dispatch(fetchCovidZoneAction());
  }, [dispatch]);
  return (
    <React.Fragment>
      {locationData &&
        locationData.length > 0 &&
        covidData &&
        covidData.length > 0 &&
        resources &&
        resources.length > 0 && (
          <CovidCardDetail
            locationData={locationData}
            covidData={covidData}
            resources={resources}
            cardType="district"
          />
        )}
      {zones &&
        zones.length > 0 &&
        covidData &&
        covidData.length > 0 &&
        resources &&
        resources.length > 0 && (
          <CovidSearchComponent
            zones={zones}
            covidData={covidData}
            resources={resources}
            cardType="district"
          />
        )}
    </React.Fragment>
  );
};

export default CovidComponent;
