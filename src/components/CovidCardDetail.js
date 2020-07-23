import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";

// components
import ProgressComponent from "./ProgressComponent";
import CategoryComponent from "./CategoryComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 460,
    // margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

const CovidCardDetail = ({ locationData, covidData, resources, cardType }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {locationData.map((item, index) => {
        const districtData = covidData.filter((data) => {
          if (data.state === item.state) {
            return data.districtData ? data.districtData : data;
          }
        });

        const cityData =
          cardType === "state"
            ? districtData
            : districtData[0].districtData.filter((district) => {
                if (district.district === item.district) {
                  return district;
                }
              });

        let categories, selectedCityCategories;
        if (resources) {
          selectedCityCategories = resources.filter((resource) => {
            if (cardType === "district") {
              if (resource.city === item[cardType]) {
                return resource;
              }
            } else {
              if (resource[cardType] === item[cardType]) {
                return resource;
              }
            }
          });

          const uniqueObjects = [
            ...new Map(
              selectedCityCategories.map((item) => [item.category, item])
            ).values(),
          ];
          categories = uniqueObjects.map((cat) => cat.category);
        }

        return (
          <Card className={classes.root} variant="outlined" key={index}>
            <CardHeader
              title={`${
                cityData[0] && cityData[0][cardType] === "Total"
                  ? "India"
                  : cityData[0][cardType]
              }`}
              subheader={`Total Cases - ${
                cityData[0] && cityData[0].confirmed
              }`}
            />
            <Divider />

            <CardContent>
              <ProgressComponent
                labelText="Active"
                cityData={cityData[0]}
                min={0}
                max={cityData[0] && cityData[0].confirmed}
                value={cityData[0] && cityData[0].active}
                styleColor="red"
                delta={cityData[0].delta && cityData[0].delta.confirmed
                  ? cityData[0].delta.confirmed
                  : cityData[0].deltaconfirmed}
              />
              <ProgressComponent
                labelText="Recovered"
                cityData={cityData[0]}
                min={0}
                max={cityData[0] && cityData[0].confirmed}
                value={cityData[0] && cityData[0].recovered}
                styleColor="green"
                delta={cityData[0].delta && cityData[0].delta.recovered
                  ? cityData[0].delta.recovered
                  : cityData[0].deltarecovered}

              />
              <ProgressComponent
                labelText="Deaths"
                cityData={cityData[0]}
                min={0}
                max={cityData[0] && cityData[0].confirmed}
                value={
                  cityData[0] && cityData[0].deceased
                    ? cityData[0].deceased
                    : cityData[0].deaths
                }
                styleColor="grey"
                delta={cityData[0].delta && cityData[0].delta.deceased
                  ? cityData[0].delta.deceased
                  : cityData[0].deltadeaths}
              />
            </CardContent>
            {categories && selectedCityCategories && cardType !== "india" && (
              <CategoryComponent
                selectedCityCategories={selectedCityCategories}
                categories={categories}
              />
            )}
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default CovidCardDetail;
