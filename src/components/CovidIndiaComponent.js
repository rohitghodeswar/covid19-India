import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchCovidStateWiseAction,
} from "../middleware/covid-middleware";

// components
import CovidCardDetail from "./CovidCardDetail";


const CovidIndiaComponent = () => {
  const { stateWiseData } = useSelector((state) => state.covidStateWiseReducer);
  const locationData = [
    {
      state: "Total"
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidStateWiseAction());
  }, [dispatch]);

  return (
    <React.Fragment>
      {locationData &&
        locationData.length > 0 &&
        stateWiseData &&
        stateWiseData.length > 0 &&
         (
          <CovidCardDetail
            locationData={locationData}
            covidData={stateWiseData}
            resources={null}
            cardType="state"
          />
        )}
    </React.Fragment>
  );
};

export default CovidIndiaComponent;
