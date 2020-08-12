import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: 400,
  },
  table: {
    "& .MuiTableCell-root": {
      padding: "5px",
      width: "10%",
    },
    "& .MuiTableHead-root .MuiTableCell-head": {
      fontWeight: 600,
    },
    "& .MuiTableCell-stickyHeader": {
      top: -1,
      backgroundColor: "#ddd",
    },
    "& .MuiTableRow-root:nth-of-type(even)": {
      backgroundColor: "#eee",
    },
    "& .MuiTypography-root": {
      fontSize: "12px",
    },
  },
}));

const CovidDistrictTable = ({ stateName, covidData }) => {
  const classes = useStyles();
  //   const distFilter = ["Telangana", "Delhi"];

  const states = covidData.filter(
    (data) => data.state !== "Telangana" && data.state !== "Delhi"
  );
  const stateData = states.find((data) => data.state === stateName);

  return (
    <React.Fragment>
      {stateData ? (
        <TableContainer className={classes.container} component={Paper}>
          <Table
            className={classes.table}
            stickyHeader
            //   size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell>District</TableCell>
                <TableCell align="right">C</TableCell>
                <TableCell align="right">A</TableCell>
                <TableCell align="right">R</TableCell>
                <TableCell align="right">D</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stateData &&
                stateData.districtData.map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{data.district}</TableCell>
                      <TableCell align="right">
                        {data.delta && data.delta.confirmed > 0 && (
                          <Typography
                            component="p"
                            color="textSecondary"
                            style={{ color: "red" }}
                          >
                            <ArrowUpwardIcon style={{ fontSize: "12px" }} />
                            {data.delta && data.delta.confirmed}
                          </Typography>
                        )}
                        {data.delta && data.delta.confirmed === 0 && (
                          <div style={{ visibility: "hidden" }}>-</div>
                        )}
                        {new Intl.NumberFormat("en-IN").format(data.confirmed)}
                      </TableCell>
                      <TableCell align="right">
                        {data.delta &&
                          (data.delta.confirmed > 0 ||
                            data.delta.confirmed === 0) && (
                            <div style={{ visibility: "hidden" }}>-</div>
                          )}
                        {new Intl.NumberFormat("en-IN").format(data.active)}
                      </TableCell>
                      <TableCell align="right">
                        {data.delta && data.delta.recovered > 0 && (
                          <Typography
                            component="p"
                            color="textSecondary"
                            style={{ color: "green" }}
                          >
                            <ArrowUpwardIcon style={{ fontSize: "12px" }} />
                            {data.delta && data.delta.recovered}
                          </Typography>
                        )}
                        {data.delta && data.delta.recovered === 0 && (
                          <div style={{ visibility: "hidden" }}>-</div>
                        )}
                        {new Intl.NumberFormat("en-IN").format(data.recovered)}
                      </TableCell>
                      <TableCell align="right">
                        {data.delta && data.delta.deceased > 0 && (
                          <Typography component="p" color="textSecondary">
                            <ArrowUpwardIcon style={{ fontSize: "12px" }} />
                            {data.delta.deceased}
                          </Typography>
                        )}
                        {data.delta && data.delta.deceased === 0 && (
                          <div style={{ visibility: "hidden" }}>-</div>
                        )}
                        {new Intl.NumberFormat("en-IN").format(data.deceased)}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "District-wise numbers are out-dated as cumulative counts for each district are not reported in bulletin"
      )}
    </React.Fragment>
  );
};

export default CovidDistrictTable;
