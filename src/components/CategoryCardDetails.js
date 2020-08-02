import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 0,
  },
  cardContent: {
    paddingTop: 0,
  },
  phoneIcon: {
    position: "relative",
    top: "5px",
    left: "-5px",
  },
  phoneNum: {
    marginBottom: "5px",
  },
}));

const CategoryCardDetails = ({ data, category }) => {
  const classes = useStyles();
  const phoneNums = data.phonenumber && data.phonenumber.split(",");
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={category}
        subheader={
          <React.Fragment>
            <Typography component="p" color="textSecondary">
              {data.nameoftheorganisation}
            </Typography>
            <Typography component="p" color="textSecondary">
              <strong>{data.city}</strong>
            </Typography>
          </React.Fragment>
        }
      />
      <CardContent className={classes.cardContent}>
        <Typography component="p" color="textSecondary">
          {data.descriptionandorserviceprovided}
        </Typography>

        {phoneNums && phoneNums.length > 0 && (
          <div className={classes.phoneNum}>
            <PhoneAndroidOutlinedIcon className={classes.phoneIcon} />
            {phoneNums.map((num, index) => {
              return (
                <span key={index}>
                  <a href={`tel:${num}`}>{num}</a>{" "}
                </span>
              );
            })}
          </div>
        )}

        {data.contact && (
          <Typography component="p" color="textSecondary">
            <a href={data.contact} target="blank">
              Source
            </a>
          </Typography>
        )}
      </CardContent>
      <Divider />
    </Card>
  );
};

export default CategoryCardDetails;
