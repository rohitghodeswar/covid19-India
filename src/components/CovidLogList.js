import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import formatDistance from "date-fns/formatDistance";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";

const useStyles = makeStyles((theme) => ({
  logList: {
    width: "100%",
    marginBottom: "10px",
    backgroundColor: "rgba(108,117,125,.0627451)",
    borderRadius: 5,
    // boxShadow:
    //   "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  timeIcon: {
    position: "relative",
    top: "6px",
    marginRight: "5px",
  },
  cardText: {
    padding: "5px 15px",
  },
}));

const getTimeDiff = (data) => {
  const timeDiff = formatDistance(
    new Date(
      Number(new Date().getFullYear()),
      Number(new Date().getMonth()) + 1,
      Number(new Date().getDate()),
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds()
    ),
    new Date(
      Number(new Date().getFullYear()),
      Number(new Date().getMonth()) + 1,
      Number(new Date().getDate()),
      new Date(data * 1000).getHours(),
      new Date(data * 1000).getMinutes(),
      new Date(data * 1000).getSeconds()
    ),
    { includeSeconds: true }
  );
  return timeDiff;
};

const CovidLogList = ({ logData }) => {
  const classes = useStyles();
  const lastDate = new Date(logData[0].timestamp * 1000).toDateString();
  const dateArr = lastDate.split(" ");
  const formatedDate = `${dateArr[2]} ${dateArr[1]}, ${dateArr[3]}`;

  return (
    <React.Fragment>
      <Typography component="p" color="textPrimary" style={{ padding: "5px" }}>
        News update - <strong>{formatedDate}</strong>
      </Typography>
      {
        // eslint-disable-next-line
        logData.reverse().map((data, index) => {
          const logTodayDate = new Date(data.timestamp * 1000).toDateString();
          const lastUpdated = getTimeDiff(data.timestamp);

          if (lastDate === logTodayDate) {
            data.update = data.update.replace(/\n/g, "<br/>");
            return (
              <Paper key={index} className={classes.logList}>
                <Typography
                  component="p"
                  color="textSecondary"
                  style={{ paddingLeft: "15px", paddingTop: "5px" }}
                >
                  {/* <AccessTimeIcon className={classes.timeIcon} /> */}
                  <strong>{`${
                    lastUpdated.charAt(0).toUpperCase() + lastUpdated.slice(1)
                  } ago`}</strong>
                </Typography>
                <Typography
                  component="p"
                  color="textSecondary"
                  className={classes.cardText}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data.update,
                    }}
                  ></span>
                </Typography>
              </Paper>
            );
          }
        })
      }
    </React.Fragment>
  );
};

export default CovidLogList;
