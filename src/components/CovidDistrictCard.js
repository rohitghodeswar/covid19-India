import React from "react";

import CovidDistrictCardDetail from "./CovidDistrictCardDetail";

const CovidDistrictCard = ({
  locationValue,
  covidData,
  resources,
  cardType,
  zones,
}) => {
  return (
    <React.Fragment>
      {locationValue &&
        locationValue.map((location) => {
          const stateData = covidData.find(
            (data) => data.state.toLowerCase() === location.state.toLowerCase()
          );
          const districtData = stateData.districtData.filter((data) =>
            data.district
              .toLowerCase()
              .includes(location.district.toLowerCase())
          );
          return (
            <CovidDistrictCardDetail
              key={location}
              districtData={districtData}
              zones={zones}
              resources={resources}
              location={location}
            />
          );
        })}
    </React.Fragment>
  );
};

export default CovidDistrictCard;
