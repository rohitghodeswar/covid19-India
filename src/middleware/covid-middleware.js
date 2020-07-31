import {
  getCovidData,
  getCovidResourseData,
  getCovidZoneData,
  getCovidStateWiseData,
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
} from "../actions/covid-action";

export const fetchCovidDataAction = () => {
  return async (dispatch, getState) => {
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
  return async (dispatch, getState) => {
    dispatch(getCovidResourceRequest());
    dispatch(getCovidDataRequest());

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
  return async (dispatch, getState) => {
    dispatch(getCovidZoneRequest());
    dispatch(getCovidDataRequest());

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
  return async (dispatch, getState) => {
    dispatch(getCovidStateWiseRequest());
    dispatch(getCovidDataRequest());

    try {
      const response = await getCovidStateWiseData();
      dispatch(getCovidStateWiseSuccess(response.data));
      dispatch(getLoadingSuccess());
    } catch (e) {
      console.log("error", e);
    }
  };
};
