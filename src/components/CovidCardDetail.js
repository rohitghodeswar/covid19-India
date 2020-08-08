import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import UpdateIcon from "@material-ui/icons/Update";

import CountUp from "react-countup";
import { Doughnut } from "react-chartjs-2";

// component
import ProgressComponent from "./ProgressComponent";
import CategoryComponent from "./CategoryComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 460,
    // margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    border: 0,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    margin: "10px 0 !important",
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
  zone: {
    height: "10px",
  },
  cardHeader: {
    padding: "5px 10px",
  },
  covidCardContent: {
    position: "relative",
    padding: "10px 12px",
    "&:last-child": {
      paddingBottom: 15,
    },
  },
  cardSwitch: {
    position: "absolute",
    top: "0px",
    right: 0,
  },
  updateIcon: {
    position: "relative",
    top: "5px",
  },
  cardTitle: {
    fontSize: 20,
  },
}));

const CovidCardDetail = ({
  title,
  active,
  confirmed,
  recovered,
  deceased,
  delta,
  categoryData,
  categoryOptions,
  zone,
  lastUpdated,
}) => {
  const classes = useStyles();
  const data = {
    labels: ["Active", "Recovered", "Deceased"],
    datasets: [
      {
        data: [active, recovered, deceased],
        backgroundColor: ["#FF6384", "#90EE90", "#D3D3D3"],
        hoverBackgroundColor: ["#FF6384", "#90EE90", "#D3D3D3"],
      },
    ],
  };

  const [showChart, setShowChart] = React.useState(false);

  const handleChange = (event) => {
    setShowChart(!showChart);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={
          <Typography component="h2" className={classes.cardTitle}>
            {title}
          </Typography>
        }
        subheader={
          <React.Fragment>
            Total Cases -{" "}
            <strong>
              <CountUp
                formattingFn={(confirmed) =>
                  new Intl.NumberFormat("en-IN").format(confirmed)
                }
                end={Number(confirmed)}
              />
            </strong>
            {!!zone && (
              <Typography component="p" color="textSecondary">
                Zone -{" "}
                <strong style={{ color: `${zone.toLowerCase()}` }}>
                  {`${zone.charAt(0).toUpperCase() + zone.slice(1)} `}
                </strong>
              </Typography>
            )}
            {lastUpdated && (
              <Typography component="p" color="textSecondary">
                <UpdateIcon className={classes.updateIcon} />{" "}
                <strong>{`${
                  lastUpdated.charAt(0).toUpperCase() + lastUpdated.slice(1)
                } ago`}</strong>
              </Typography>
            )}
          </React.Fragment>
        }
        className={classes.cardHeader}
      />

      <Divider />

      <CardContent className={classes.covidCardContent}>
        {active > 0 || recovered > 0 || deceased > 0 ? (
          <div className={classes.cardSwitch}>
            <Switch
              checked={showChart}
              onChange={handleChange}
              name="showChart"
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
        ) : null}

        {!showChart ? (
          <React.Fragment>
            <ProgressComponent
              labelText="Active"
              min={0}
              max={confirmed}
              value={active}
              styleColor="red"
              delta={delta && delta.confirmed}
            />
            <ProgressComponent
              labelText="Recovered"
              min={0}
              max={confirmed}
              value={recovered}
              styleColor="green"
              delta={delta && delta.recovered}
            />
            <ProgressComponent
              labelText="Deceased"
              min={0}
              max={confirmed}
              value={deceased}
              styleColor="gray"
              delta={delta && delta.deceased}
            />
          </React.Fragment>
        ) : (
          <Doughnut legend={{ position: "right" }} data={data} />
        )}
      </CardContent>
      {categoryData && categoryData.length > 0 && (
        <CategoryComponent
          categoryData={categoryData}
          categoryOptions={categoryOptions}
        />
      )}
    </Card>
  );
};

export default CovidCardDetail;
