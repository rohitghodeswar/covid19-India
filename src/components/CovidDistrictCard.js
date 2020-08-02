import React from "react";

import CovidDistrictCardDetail from "./CovidDistrictCardDetail";

const CovidDistrictCard = ({
  locationValue,
  covidData,
  resources,
  zones,
}) => {
  return (
    <React.Fragment>
      {locationValue &&
        locationValue.map((location) => {
          const stateData = covidData.find(
            (data) => data.state.toLowerCase() === location.state.toLowerCase()
          );
          let distData;
          const districtData = stateData.districtData.filter((data) =>
            data.district
              .toLowerCase()
              .includes(location.district.toLowerCase())
          );

          if (districtData.length > 0) {
            distData = districtData;
          } else {
            const loc = location.district.split(" ")[0];

            const districtData = stateData.districtData.filter((data) =>
              data.district.toLowerCase().includes(loc.toLowerCase())
            );
            distData = districtData;
          }

          return (
            <CovidDistrictCardDetail
              key={location}
              districtData={distData}
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
