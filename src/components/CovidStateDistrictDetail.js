import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

import CircularProgress from "@material-ui/core/CircularProgress";

import { useSelector, useDispatch } from "react-redux";

import { fetchCovidDataAction } from "../middleware/covid-middleware";

import CovidDistrictTable from "./CovidDistrictTable";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .07)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 48,
    "&$expanded": {
      minHeight: 48,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: "15px 10px",
  },
}))(MuiAccordionDetails);

const CovidStateDistrictDetail = ({ stateName }) => {
  const dispatch = useDispatch();
  const { covidData } = useSelector((state) => state.covidReducer);
  const [expanded, setExpanded] = React.useState("");

  const handleChangePanel = (panel) => (event, newExpanded) => {
    if (!covidData) {
      dispatch(fetchCovidDataAction());
    }
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChangePanel("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>All districts in {stateName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {expanded && covidData && covidData.length > 0 ? (
            <CovidDistrictTable stateName={stateName} covidData={covidData} />
          ) : (
            <CircularProgress />
          )}
        </AccordionDetails>
        <Divider />
      </Accordion>
    </React.Fragment>
  );
};

export default CovidStateDistrictDetail;
