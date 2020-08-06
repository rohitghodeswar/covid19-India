import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import CovidCardDetail from "./CovidCardDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  sortTitle: {
    textAlign: "center",
    background: "skyblue",
    padding: "10px",
    position: "relative",
    top: "5px",
    borderRadius: "5px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
}));

const CovidSortComponent = ({ sortedData, cardType, zones }) => {
  const classes = useStyles();
  const topFive =
    cardType === "state" ? sortedData.slice(0, 6) : sortedData.slice(0, 5);

  return (
    <div className={classes.root}>
      <Typography
        className={classes.sortTitle}
        component="p"
        color="textSecondary"
      >
        Top{" "}
        <strong>
          5 {`${cardType === "district" ? "Districts" : "States"}`}
        </strong>{" "}
        with <strong>Active</strong> cases in India
      </Typography>
      {
        // eslint-disable-next-line
        topFive.map((cardData, index) => {
          if (cardType === "state") {
            const obj = {
              active: cardData.active,
              confirmed: cardData.confirmed,
              deceased: cardData.deaths,
              recovered: cardData.recovered,
              [cardType]: cardData.state,
              delta: {
                confirmed: cardData.deltaconfirmed,
                deceased: cardData.deltadeaths,
                recovered: cardData.deltarecovered,
              },
            };
            cardData = obj;
          } else {
            const zoneData = zones.find(
              (zone) => zone.district === cardData[cardType]
            );
            cardData["zone"] = zoneData.zone;
          }

          if (cardData[cardType] !== "Total") {
            return (
              <CovidCardDetail
                title={cardData[cardType]}
                active={cardData.active}
                confirmed={cardData.confirmed}
                recovered={cardData.recovered}
                deceased={cardData.deceased}
                delta={cardData.delta}
                key={index}
                zone={cardData.zone}
                lastUpdated={cardData.lastUpdated}
              />
            );
          }
        })
      }
    </div>
  );
};

export default CovidSortComponent;
