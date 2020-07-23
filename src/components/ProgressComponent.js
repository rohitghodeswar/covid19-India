import React from "react";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CountUp from 'react-countup';


const ProgressComponent = ({
  labelText,
  cityData,
  max,
  min,
  value,
  styleColor,
}) => {
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 0,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 0,
      backgroundColor: `${styleColor}`,
    },
  }))(LinearProgress);

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginBottom: "10px"
    },
  });
  const classes = useStyles();

  const getValue = (value) => ((value - min) * 100) / (max - min);
  return (
    <div className={classes.root}>
      <Typography component="p" color="textSecondary" gutterBottom>
        {labelText} - <CountUp end={Number(value)} />
      </Typography>

      <BorderLinearProgress variant="determinate" value={getValue(value)} />
    </div>
  );
};

export default ProgressComponent;
