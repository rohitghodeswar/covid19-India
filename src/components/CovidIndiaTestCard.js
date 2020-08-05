import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    marginBottom: "10px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
}));

const CovidIndiaTestCard = ({ covidTestData }) => {
  const classes = useStyles();
  const len = covidTestData && covidTestData.length;
  const testData = covidTestData[len - 1];
  const dateAsOf = (date) => {
    const dateArr = date.split("/");

    let month = [];
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    return `${dateArr[0]} ${month[Number(dateArr[1]) - 1]}, ${dateArr[2]}`;
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <React.Fragment>
          <Typography component="p" color="textSecondary">
            Total Sample Tested -{" "}
            <strong>
              {
                <CountUp
                  formattingFn={(value) =>
                    new Intl.NumberFormat("en-IN").format(value)
                  }
                  end={Number(testData.totalsamplestested)}
                />
              }
            </strong>
          </Typography>
          <Typography component="p" color="textSecondary">
            Samples Reported as of{" "}
            <strong>{dateAsOf(testData.testedasof)}</strong> is{" "}
            <strong>
              {
                <CountUp
                  formattingFn={(value) =>
                    new Intl.NumberFormat("en-IN").format(value)
                  }
                  end={Number(testData.samplereportedtoday)}
                />
              }
            </strong>
          </Typography>
          {testData.source && (
          <Typography component="p" color="textSecondary">
            <a href={testData.source} target="blank">
              Source
            </a>
          </Typography>
        )}
        </React.Fragment>
      </CardContent>
    </Card>
  );
};

export default CovidIndiaTestCard;
