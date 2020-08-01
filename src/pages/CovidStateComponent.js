import React, { useEffect, useState } from "react";

//components
import CovidSearchComponent from "../components/CovidSearchComponent";
import CovidCardComponent from "../components/CovidCardComponent";
import CovidLoadingCard from "../components/CovidLoadingCard";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchCovidStateWiseAction,
  fetchCovidResourceAction,
  fetchCovidZoneAction,
} from "../middleware/covid-middleware";

const CovidStateComponent = () => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.covidReducer);
  const { stateWiseData } = useSelector((state) => state.covidStateWiseReducer);
  const { resources } = useSelector((state) => state.covidResourceReducer);
  const { zones } = useSelector((state) => state.covidZoneReducer);
  const { isLoading } = useSelector((state) => state.covidLoadingReducer);

  const [searchValue, setSearchValue] = useState([]);

  const handleSearch = (values) => {
    setSearchValue(values);
  };

  useEffect(() => {
    if (!resources || !zones) {
      dispatch(fetchCovidResourceAction());
      dispatch(fetchCovidZoneAction());
    }
    dispatch(fetchCovidStateWiseAction());
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <React.Fragment>
      {zones && zones.length > 0 && (
        <CovidSearchComponent
          zones={zones}
          searchValue={searchValue}
          handleSearch={handleSearch}
          cardType="state"
        />
      )}
      {searchValue &&
        searchValue.length > 0 &&
        stateWiseData &&
        stateWiseData.length > 0 &&
        resources &&
        resources.length > 0 && (
          <CovidCardComponent
            locationValue={searchValue}
            covidData={stateWiseData}
            resources={resources}
            cardType="state"
          />
        )}
      {isLoading && <CovidLoadingCard />}

      {location &&
        location.length > 0 &&
        stateWiseData &&
        stateWiseData.length > 0 &&
        resources &&
        resources.length > 0 && (
          <CovidCardComponent
            locationValue={location}
            covidData={stateWiseData}
            resources={resources}
            cardType="state"
          />
        )}
    </React.Fragment>
  );
};

export default CovidStateComponent;
