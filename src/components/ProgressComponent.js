import React from "react";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const ProgressComponent = ({
  labelText,
  max,
  min,
  value,
  styleColor,
  delta,
}) => {
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 20,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 0,
      backgroundColor: `light${styleColor}`,
    },
  }))(LinearProgress);

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginBottom: "5px",
    },
    arrowIcon: {
      position: "relative",
      fontSize: "18px",
      top: "2px",
      color: styleColor,
    },
  });
  const classes = useStyles();

  const getValue = (value) => ((value - min) * 100) / (max - min);
  return (
    <div className={classes.root}>
      <Typography component="p" color="textSecondary" gutterBottom>
        {labelText} -{" "}
        <strong>
          <CountUp
            formattingFn={(value) =>
              new Intl.NumberFormat("en-IN").format(value)
            }
            end={Number(value)}
          />{" "}
        </strong>
        {delta > 0 && delta && (
          <React.Fragment>
            <span>(</span>
            <ArrowUpwardIcon className={classes.arrowIcon} />
            {`${new Intl.NumberFormat("en-IN").format(delta)})`}
          </React.Fragment>
        )}
      </Typography>

      <BorderLinearProgress variant="determinate" value={getValue(value)} />
    </div>
  );
};

export default ProgressComponent;
