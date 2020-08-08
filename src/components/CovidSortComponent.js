import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import CovidCardDetail from "./CovidCardDetail";
import { Paper, Grid } from "@material-ui/core";

import map from "lodash/map";
import orderBy from "lodash/orderBy";
import flattenDeep from "lodash/flattenDeep";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  sortTitle: {
    margin: "10px 0",
    fontSize: 18
  },
  formControl: {
    margin: 0,
    minWidth: "90%",
  },
  sortContainer: {
    padding: "0 15px 15px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
}));

const CovidSortComponent = ({ sortData, cardType, zones }) => {
  const classes = useStyles();
  // const topFive =
  //   cardType === "state" ? sortedData.slice(0, 6) : sortedData.slice(0, 5);

  const [caseType, setCaseType] = React.useState("active");
  const [sortBy, setsortBy] = React.useState("desc");
  const [result, setResult] = React.useState([]);

  const handleCaseType = (event) => {
    setCaseType(event.target.value);
  };

  const handleSortBy = (event) => {
    setsortBy(event.target.value);
  };

  useEffect(() => {
    if (cardType === "district") {
      let districtsList = map(sortData, (x) =>
        orderBy(x.districtData, caseType, sortBy)
      );
      let deepArray = flattenDeep(districtsList);
      const sortedDistricts = orderBy(deepArray, caseType, sortBy);
      const filteredDistricts = sortedDistricts.filter(
        (data) =>
          data.district !== "Unknown" &&
          data.district !== "Unassigned" &&
          data.district !== "Other State" &&
          data.district !== "Foreign Evacuees" &&
          data.district !== "Italians" &&
          data.district !== "Others" &&
          data.district !== "Other Region" &&
          data.district !== "CAPF Personnel"
      );

      const topTen = filteredDistricts.slice(0, 10);
      setResult(topTen);
    } else if (cardType === "state") {
      const sortedStates = orderBy(sortData, caseType, sortBy);
      const filteredStates = sortedStates.filter(
        (data) => data.state !== "State Unassigned" && data.state !== "Total"
      );

      const topTen = filteredStates.slice(0, 10);
      setResult(topTen);
    }
  }, [cardType, sortData, caseType, sortBy]);

  return (
    <div className={classes.root}>
      <Paper className={classes.sortContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Typography component="p" color="textSecondary" className={classes.sortTitle}>
              Top{" "}
              <strong>
                10 {`${cardType === "district" ? "Districts" : "States"}`}
              </strong>{" "}
              with{" "}
              <strong>{`${
                caseType.charAt(0).toUpperCase() + caseType.slice(1)
              } `}</strong>{" "}
              cases in India
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl className={classes.formControl}>
              <InputLabel id="case-type">Case type</InputLabel>
              <Select
                labelId="case-type"
                id="case-type-select"
                value={caseType}
                onChange={handleCaseType}
                className={classes.caseTypeSelect}
              >
                <MenuItem value={"active"}>Active</MenuItem>
                <MenuItem value={"recovered"}>Recovered</MenuItem>
                <MenuItem
                  value={`${cardType === "state" ? "deaths" : "deceased"}`}
                >
                  Deceased
                </MenuItem>
                <MenuItem value={"confirmed"}>Confirmed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="sort-by">Sort by</InputLabel>
              <Select
                labelId="sort-by"
                id="sort-by-select"
                value={sortBy}
                onChange={handleSortBy}
              >
                <MenuItem value={"asc"}>Asc</MenuItem>
                <MenuItem value={"desc"}>Desc</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      {result &&
        result.length > 0 &&
        // eslint-disable-next-line
        result.map((cardData, index) => {
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
            cardData["zone"] = zoneData && zoneData.zone;
          }

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
        })}
    </div>
  );
};

export default CovidSortComponent;
