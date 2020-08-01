import {
    GET_COVID_LOG_REQUEST,
    GET_COVID_LOG_SUCCESS,
  } from "../constants/action-types";
  
  const initialState = {
    logData: []
  };
  
  const covidLogReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COVID_LOG_REQUEST:
        return { ...state };
  
      case GET_COVID_LOG_SUCCESS:
        return { ...state, logData: action.payload };
      default:
        return state;
    }
  };
  
  export default covidLogReducer;
  