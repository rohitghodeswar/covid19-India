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
import CovidLoadingCard from "../components/CovidLoadingCard";

const CovidDistrictComponent = () => {
  const dispatch = useDispatch();
  const { covidData, location } = useSelector((state) => state.covidReducer);
  const { isLoading } = useSelector((state) => state.covidLoadingReducer);

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
      {isLoading && <CovidLoadingCard />}

      {location &&
        location.length > 0 &&
        covidData &&
        covidData.length > 0 &&
        resources &&
        resources.length > 0 &&
        zones &&
        zones.length > 0 && (
          <CovidCardComponent
            locationValue={location}
            covidData={covidData}
            resources={resources}
            cardType="district"
            zones={zones}
          />
        )}
    </React.Fragment>
  );
};

export default CovidDistrictComponent;