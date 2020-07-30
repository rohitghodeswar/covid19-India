import React from "react";

import CovidCardDetail from "./CovidCardDetail";

const CovidCardComponent = ({
  locationValue,
  covidData,
  resources,
  cardType,
  zones,
}) => {
  return (
    <React.Fragment>
      {locationValue.map((location, index) => {
        let cardData;
        if (cardType === "state") {
          const stateData = covidData.find(
            (data) => data.state === location.state
          );
          const stateObj = {
            active: stateData.active,
            confirmed: stateData.confirmed,
            deceased: stateData.deaths,
            recovered: stateData.recovered,
            [cardType]: location.state,
            delta: {
              confirmed: stateData.deltaconfirmed,
              deceased: stateData.deltadeaths,
              recovered: stateData.deltarecovered,
            },
          };

          cardData = stateObj;
        } else if (cardType === "india") {
          const stateData = covidData.find((data) => data.state === "Total");
          const indiaObj = {
            active: stateData.active,
            confirmed: stateData.confirmed,
            deceased: stateData.deaths,
            recovered: stateData.recovered,
            [cardType]: "India",
            delta: {
              confirmed: stateData.deltaconfirmed,
              deceased: stateData.deltadeaths,
              recovered: stateData.deltarecovered,
            },
          };
          cardData = indiaObj;
        } else if (cardType === "district") {
          const stateData = covidData.find(
            (data) => data.state === location.state
          );
          const districtData = stateData.districtData.find(
            (data) => data.district === location.district
          );
          const zoneData = zones.find(
            (zone) => zone[cardType] === location.district
          );
          districtData["zone"] = zoneData.zone;
          cardData = districtData;
        }

        const categoryData =
          resources &&
          resources.filter((res) => {
            if (
              res[cardType === "district" ? "city" : cardType] ===
              location[cardType]
            ) {
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
            title={cardData[cardType]}
            active={cardData.active}
            confirmed={cardData.confirmed}
            recovered={cardData.recovered}
            deceased={cardData.deceased}
            delta={cardData.delta}
            key={index}
            categoryData={categoryData}
            categoryOptions={categoryOptions}
            zone={cardData.zone}
          />
        );
      })}
    </React.Fragment>
  );
};

export default CovidCardComponent;
