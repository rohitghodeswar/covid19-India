import React from "react";

import CovidDistrictCardDetail from "./CovidDistrictCardDetail";
import CovidLocationAlert from "./CovidLocationAlert";

const CovidDistrictCard = ({ locationValue, covidData, resources, zones }) => {
  return (
    <React.Fragment>
      {locationValue &&
        locationValue.map((location, index) => {
          const stateData = covidData.find(
            (data) => data.state.toLowerCase() === location.state.toLowerCase()
          );
          let distData = [];
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

          if (distData && distData.length === 0) {
            if (location.city) {
              const districtData = stateData.districtData.filter((data) =>
                data.district
                  .toLowerCase()
                  .includes(location.city.toLowerCase())
              );
              distData = districtData;
            }
          }
          
          return distData && distData.length > 0 ? (
            <CovidDistrictCardDetail
              key={location}
              districtData={distData}
              zones={zones}
              resources={resources}
              location={location}
            />
          ) : (
            <CovidLocationAlert
              key={index}
              isNotCity={true}
              disAlert={true}
              headerText="Alert"
              bodyText="As per your current location we are not able to find your District or nearest City in Database."
            />
          );
        })}
    </React.Fragment>
  );
};

export default CovidDistrictCard;
