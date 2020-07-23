import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import {
  fetchUsers,
  postUser,
  updateUserData,
  deleteUserData,
} from "../middleware/users-middleware";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 10,
    width: "100%",
  },
  btnStyle: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonContainer = () => {
  const dispatch = useDispatch();

  const getBtnClick = () => {
    dispatch(fetchUsers());
  };

  const postBtnClick = () => {
    const postRequest = {
      name: "Rohit Ghodeswar",
    };
    dispatch(postUser(postRequest));
  };

  const putBtnClick = () => {
    const putRequest = {
      id: 1,
      name: "Rohit Ghodeswar",
    };
    dispatch(updateUserData(putRequest));
  };

  const deleteBtnClick = () => {
    const deleteRequest = {
      id: 1,
    };
    dispatch(deleteUserData(deleteRequest));
  };

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.btnStyle}>
        <Button variant="outlined" onClick={getBtnClick}>
          GET
        </Button>
        <Button variant="outlined" onClick={postBtnClick} color="primary">
          POST
        </Button>
        <Button variant="outlined" onClick={putBtnClick} color="secondary">
          PUT
        </Button>
        <Button variant="outlined" onClick={deleteBtnClick} color="primary">
          DELETE
        </Button>
      </div>
    </Paper>
  );
};

export default ButtonContainer;
