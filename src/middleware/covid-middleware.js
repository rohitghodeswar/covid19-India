import {
  getCovidData,
  getCovidResourseData,
  getCovidZoneData,
  getCovidStateWiseData,
  getLogData,
} from "../services/covid-service";

import {
  getLoadingRequest,
  getLoadingSuccess,
  getCovidDataRequest,
  getCovidDataSuccess,
  getCovidResourceRequest,
  getCovidResourceSuccess,
  getCovidZoneRequest,
  getCovidZoneSuccess,
  getCovidStateWiseRequest,
  getCovidStateWiseSuccess,
  getLogRequest,
  getLogSuccess,
} from "../actions/covid-action";

export const fetchCovidDataAction = () => {
  return async (dispatch) => {
    dispatch(getLoadingRequest());
    dispatch(getCovidDataRequest());
    try {
      const response = await getCovidData();
      dispatch(getCovidDataSuccess(response.data));
      dispatch(getLoadingSuccess());
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const fetchCovidResourceAction = () => {
  return async (dispatch) => {
    dispatch(getLoadingRequest());
    dispatch(getCovidResourceRequest());

    try {
      const response = await getCovidResourseData();
      dispatch(getCovidResourceSuccess(response.data));
      dispatch(getLoadingSuccess());
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const fetchCovidZoneAction = () => {
  return async (dispatch) => {
    dispatch(getLoadingRequest());
    dispatch(getCovidZoneRequest());

    try {
      const response = await getCovidZoneData();
      dispatch(getCovidZoneSuccess(response.data));
      dispatch(getLoadingSuccess());
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const fetchCovidStateWiseAction = () => {
  return async (dispatch) => {
    dispatch(getLoadingRequest());
    dispatch(getCovidStateWiseRequest());

    try {
      const response = await getCovidStateWiseData();
      dispatch(getCovidStateWiseSuccess(response.data));
      dispatch(getLoadingSuccess());
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const fetchLogAction = () => {
  return async (dispatch) => {
    dispatch(getLoadingRequest());
    dispatch(getLogRequest());
    try {
      const response = await getLogData();
      dispatch(getLogSuccess(response.data));
      dispatch(getLoadingSuccess());
    } catch (e) {
      console.log("error", e);
    }
  };
};
