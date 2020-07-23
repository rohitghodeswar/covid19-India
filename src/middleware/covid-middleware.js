import {
    getCovidData,
    getCovidResourseData,
    getCovidZoneData,
    getCovidStateWiseData
  } from "../services/covid-service";

  import {
    getCovidDataRequest,
    getCovidDataSuccess,
    getCovidResourceRequest,
    getCovidResourceSuccess,
    getCovidZoneRequest,
    getCovidZoneSuccess,
    getCovidStateWiseRequest,
    getCovidStateWiseSuccess

  } from "../actions/covid-action";
  
  export const fetchCovidDataAction = () => {
    return async (dispatch) => {
      dispatch(getCovidDataRequest());
      try {
        const response = await getCovidData();
        dispatch(getCovidDataSuccess(response.data));
      } catch (e) {
        console.log("error", e);
      }
    };
  };

  export const fetchCovidResourceAction = () => {
    return async (dispatch) => {
      dispatch(getCovidResourceRequest());
      try {
        const response = await getCovidResourseData();
        dispatch(getCovidResourceSuccess(response.data));
      } catch (e) {
        console.log("error", e);
      }
    };
  };

  export const fetchCovidZoneAction = () => {
    return async (dispatch) => {
      dispatch(getCovidZoneRequest());
      try {
        const response = await getCovidZoneData();
        dispatch(getCovidZoneSuccess(response.data));
      } catch (e) {
        console.log("error", e);
      }
    };
  };

  export const fetchCovidStateWiseAction = () => {
    return async (dispatch) => {
      dispatch(getCovidStateWiseRequest());
      try {
        const response = await getCovidStateWiseData();
        dispatch(getCovidStateWiseSuccess(response.data));
      } catch (e) {
        console.log("error", e);
      }
    };
  };