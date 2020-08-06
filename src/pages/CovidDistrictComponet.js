import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import map from "lodash/map";
import orderBy from "lodash/orderBy";
import flattenDeep from "lodash/flattenDeep";

import {
  fetchCovidDataAction,
  fetchCovidResourceAction,
  fetchCovidZoneAction,
} from "../middleware/covid-middleware";

//components
import CovidSearchComponent from "../components/CovidSearchComponent";
import CovidCardComponent from "../components/CovidCardComponent";
import CovidSortComponent from "../components/CovidSortComponent";
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

  let districtsList = map(covidData, (x) =>
    orderBy(x.districtData, "active", "desc")
  );
  let deepArray = flattenDeep(districtsList);
  const sortedDistricts = orderBy(deepArray, "active", "desc");

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
      {sortedDistricts &&
        sortedDistricts.length > 0 &&
        zones &&
        zones.length > 0 && (
          <CovidSortComponent
            sortedData={sortedDistricts}
            cardType="district"
            zones={zones}
          />
        )}
    </React.Fragment>
  );
};

export default CovidDistrictComponent;
