import React, { useEffect } from "react";
import { Paper, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px 0 10px 0",
  },
  searchPaper: {
    padding: "15px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  searchHeading: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "slategray",
  },
}));

const CovidSearchComponent = ({
  zones,
  searchValue,
  handleSearch,
  cardType,
}) => {
  const classes = useStyles();
  const { location } = useSelector((state) => state.covidReducer);
  const [options, setOptions] = React.useState([]);

  useEffect(() => {
    let options = [
      ...new Map(zones.map((item) => [item[cardType], item])).values(),
    ];

    if (location && location.length > 0 && location[0].country === "India") {
      const filteredOptions = options.filter(
        (data) => data[cardType] !== location[0][cardType]
      );
      setOptions(filteredOptions);
    } else {
      setOptions(options);
    }
  }, [location, zones, cardType]);

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper variant="outlined" square className={classes.searchPaper}>
            <Typography
              component="h2"
              className={classes.searchHeading}
              gutterBottom
            >
              All {`${cardType.charAt(0).toUpperCase() + cardType.slice(1)}s`}{" "}
              in India
            </Typography>
            <Autocomplete
              multiple
              limitTags={4}
              id="multiple-limit-tags"
              options={options}
              getOptionLabel={(option) => option[cardType]}
              value={searchValue}
              onChange={(event, newValue) => {
                handleSearch(newValue);
              }}
              closeIcon={false}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label={``}
                  placeholder="Search here..."
                />
              )}
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CovidSearchComponent;
