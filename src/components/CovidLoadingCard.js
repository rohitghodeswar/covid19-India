import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Skeleton from "@material-ui/lab/Skeleton";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    marginBottom: "15px"
  },
}));

const CovidLoadingCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={<Skeleton animation="wave" height={20} width="100%" />}
        subheader={<Skeleton animation="wave" height={15} width="50%" />}
      />
      <Divider />

      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={50} />
          <Skeleton animation="wave" height={50} />
          <Skeleton animation="wave" height={50} style={{ marginBottom: 6 }} />
        </React.Fragment>
      </CardContent>
    </Card>
  );
};

export default CovidLoadingCard;
