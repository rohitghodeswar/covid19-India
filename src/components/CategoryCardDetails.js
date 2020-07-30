import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 0
  },
  cardContent: {
      paddingTop: 0
  }
}));

const CategoryCardDetails = ({ data, category }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title={category} subheader={data.nameoftheorganisation} />
      <CardContent className={classes.cardContent}>
        <Typography component="p" color="textSecondary">
          {data.descriptionandorserviceprovided}
        </Typography>
        <Typography component="p" color="textSecondary">
        Phone Number - <a href={`tel:${data.phonenumber}`}> {data.phonenumber}</a>
        </Typography>
        <Typography component="p" color="textSecondary">
          <a href={data.contact} target="blank">
            Source
          </a>
        </Typography>
      </CardContent>
    <Divider />
    </Card>
  );
};

export default CategoryCardDetails;
