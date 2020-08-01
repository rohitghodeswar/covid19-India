import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchCovidDataAction,
  fetchCovidResourceAction,
  fetchCovidZoneAction,
} from "../middleware/covid-middleware";

//components
import CovidSearchComponent from "../components/CovidSearchComponent";
import CovidCardComponent from "../components/CovidCardComponent";
import CovidAlertMessage from "../components/CovidAlertMessage";
import CovidDistrictCard from "../components/CovidDistrictCard";

const CovidDistrictComponent = () => {
  const dispatch = useDispatch();
  const { covidData, location } = useSelector((state) => state.covidReducer);

  const { resources } = useSelector((state) => state.covidResourceReducer);
  const { zones } = useSelector((state) => state.covidZoneReducer);

  const [searchValue, setSearchValue] = useState([]);

  const handleSearch = (values) => {
    setSearchValue(values);
  };

  useEffect(() => {
    dispatch(fetchCovidDataAction());
    dispatch(fetchCovidResourceAction());
    dispatch(fetchCovidZoneAction());
  }, [dispatch]);

  return (
    <React.Fragment>
      {zones && zones.length > 0 && (
        <CovidSearchComponent
          zones={zones}
          searchValue={searchValue}
          handleSearch={handleSearch}
          cardType="district"
        />
      )}
      {searchValue &&
        searchValue.length > 0 &&
        covidData &&
        covidData.length > 0 &&
        resources &&
        resources.length > 0 &&
        zones &&
        zones.length > 0 && (
          <CovidCardComponent
            locationValue={searchValue}
            covidData={covidData}
            resources={resources}
            cardType="district"
            zones={zones}
          />
        )}

      {location &&
        location.length > 0 &&
        location[0].country === "India" &&
        covidData &&
        covidData.length > 0 &&
        resources &&
        resources.length > 0 &&
        zones &&
        zones.length > 0 && (
          <CovidDistrictCard
            locationValue={location}
            covidData={covidData}
            resources={resources}
            cardType="district"
            zones={zones}
          />
        )}
      {location && location.length > 0 && location[0].country !== "India" && (
        <CovidAlertMessage />
      )}
    </React.Fragment>
  );
};

export default CovidDistrictComponent;
