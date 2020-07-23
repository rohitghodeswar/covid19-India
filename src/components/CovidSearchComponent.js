import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CovidCardDetail from "./CovidCardDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5px 0",
  },
  searchPaper: {
    padding: "15px",
  },
}));

const CovidSearchComponent = ({ zones, covidData, resources, cardType }) => {
  const [value, setValue] = React.useState([]);
  const classes = useStyles();

  const options = [
    ...new Map(zones.map((item) => [item[cardType], item])).values(),
  ];

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper variant="outlined" square className={classes.searchPaper}>
            <Typography component="h1" gutterBottom>
              All {`${cardType}`} in India
            </Typography>
            <Autocomplete
              multiple
              limitTags={4}
              id="multiple-limit-tags"
              options={options}
              getOptionLabel={(option) => option[cardType]}
              value={value}
              onChange={(event, newValue) => {
                console.log("newValue", newValue);
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label={`Search ${
                    cardType === "state" ? "States" : "Districts or Cities"
                  }`}
                  placeholder="Type here to search"
                />
              )}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid>
        <Grid>
          {value && value.length > 0 && (
            <CovidCardDetail
              locationData={value}
              covidData={covidData}
              resources={resources}
              cardType={cardType}
            />
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CovidSearchComponent;
