import React from "react";
import formatDistance from "date-fns/formatDistance";

import CovidCardDetail from "./CovidCardDetail";

const getTimeDiff = (data) => {
  const dateTime = data.split(" ");

  const date = dateTime[0].split("/");
  const time = dateTime[1].split(":");
  const timeDiff = formatDistance(
    new Date(
      Number(new Date().getFullYear()),
      Number(new Date().getMonth()) + 1,
      Number(new Date().getDate()),
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds()
    ),
    new Date(
      date[2],
      Number(date[1]),
      Number(date[0]),
      time[0],
      time[1],
      time[2]
    ),
    { includeSeconds: true }
  );
  return timeDiff;
};

const CovidCardComponent = ({
  locationValue,
  covidData,
  resources,
  cardType,
  zones,
}) => {
  return (
    <React.Fragment>
      {locationValue.reverse().map((location, index) => {
        let cardData;
        if (cardType === "state") {
          const stateData = covidData.find(
            (data) => data.state.toLowerCase() === location.state.toLowerCase()
          );
          let timeDiff;
          if (stateData && stateData.lastupdatedtime) {
            timeDiff = getTimeDiff(stateData.lastupdatedtime);
          }

          const stateObj = {
            active: stateData.active,
            confirmed: stateData.confirmed,
            deceased: stateData.deaths,
            recovered: stateData.recovered,
            [cardType]: location.state,
            lastUpdated: timeDiff,
            delta: {
              confirmed: stateData.deltaconfirmed,
              deceased: stateData.deltadeaths,
              recovered: stateData.deltarecovered,
            },
          };

          cardData = stateObj;
        } else if (cardType === "india") {
          const stateData = covidData.find((data) => data.state === "Total");
          let timeDiff;
          if (stateData && stateData.lastupdatedtime) {
            timeDiff = getTimeDiff(stateData.lastupdatedtime);
          }

          const indiaObj = {
            active: stateData.active,
            confirmed: stateData.confirmed,
            deceased: stateData.deaths,
            recovered: stateData.recovered,
            [cardType]: "India",
            lastUpdated: timeDiff,
            delta: {
              confirmed: stateData.deltaconfirmed,
              deceased: stateData.deltadeaths,
              recovered: stateData.deltarecovered,
            },
          };
          cardData = indiaObj;
        } else if (cardType === "district") {
          const stateData = covidData.find(
            (data) => data.state.toLowerCase() === location.state.toLowerCase()
          );
          const districtData = stateData.districtData.find(
            (data) =>
              data.district.toLowerCase() === location.district.toLowerCase()
          );
          const zoneData = zones.find(
            (zone) => zone[cardType] === location.district
          );
          districtData["zone"] = zoneData.zone.toLowerCase();
          cardData = districtData;
        }

        const categoryData =
          resources &&
          // eslint-disable-next-line
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
            lastUpdated={cardData.lastUpdated}
          />
        );
      })}
    </React.Fragment>
  );
};

export default CovidCardComponent;
