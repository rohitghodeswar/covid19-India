import React from "react";

import CovidCardDetail from "./CovidCardDetail";

const CovidDistrictCardDetail = ({
  districtData,
  zones,
  resources,
  location,
}) => {
  return (
    <React.Fragment>
      {districtData &&
        districtData.map((data, index) => {
          const zoneData = zones.find(
            (zone) => zone.district === data.district
          );
          const categoryData =
            resources &&
            // eslint-disable-next-line
            resources.filter((res) => {
              let city = location.city ? location.city : location.district;
              if (data.district === "Bengaluru Rural") {
                city = "Bangalore";
              }
              if (data.district === "Bengaluru Urban") {
                city = "Bengaluru";
              }

              if (city.includes(res.city) && res.city !== "") {
                return res.category;
              }
            });

          const uniqueObjects = [
            ...new Map(
              categoryData && categoryData.map((item) => [item.category, item])
            ).values(),
          ];
          const categoryOptions =
            uniqueObjects && uniqueObjects.map((cat) => cat.category);

          return (
            <CovidCardDetail
              title={data.district}
              active={data.active}
              confirmed={data.confirmed}
              recovered={data.recovered}
              deceased={data.deceased}
              delta={data.delta}
              categoryData={categoryData}
              categoryOptions={categoryOptions}
              zone={zoneData.zone}
              key={data.district}
              notes={data.notes}
            />
          );
        })}
    </React.Fragment>
  );
};

export default CovidDistrictCardDetail;
