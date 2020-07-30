import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

import CategoryCardDetails from "./CategoryCardDetails";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
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
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
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
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

const CategoryComponent = ({ categoryData, categoryOptions }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("");
  const [category, setCategory] = React.useState(categoryOptions[0]);
  let [selectedCategories, setSelectedCategories] = React.useState();

  selectedCategories =
  categoryData &&
  categoryData.filter((item) => item.category === category);

  const handleChangePanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;

    const data =
    categoryData &&
    categoryData.filter((item) => item.category === value);

    setCategory(event.target.value);
    setSelectedCategories(data);
  };
  return (
    <React.Fragment>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChangePanel("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Essentials / Helpline</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <FormControl className={classes.formControl}>
              <InputLabel id="category">Select Category</InputLabel>
              <Select
                labelId="category"
                id="category"
                value={category || categoryOptions[0]}
                onChange={handleCategoryChange}
              >
                {categoryOptions.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
        </AccordionDetails>
        <Divider />
        {selectedCategories &&
          selectedCategories.map((data) => (
            <CategoryCardDetails
              data={data}
              key={data.recordid}
              category={category}
            />
          ))}
      </Accordion>
    </React.Fragment>
  );
};

export default CategoryComponent;
