import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  logList: {
    width: "100%",
    marginBottom: "10px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 0,
    // boxShadow:
    //   "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
}));

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
        logData.map((data, index) => {
          const logTodayDate = new Date(data.timestamp * 1000).toDateString();

          if (lastDate === logTodayDate) {
            data.update = data.update.replace(/\n/g, "<br/>");
            return (
              <Paper key={index} className={classes.logList}>
                <Typography
                  component="p"
                  color="textSecondary"
                  style={{ padding: "5px" }}
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
