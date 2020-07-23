// covid constants

import {
  GET_CURRENT_LOCATION,
  GET_COVID_DATA_REQUEST,
  GET_COVID_DATA_SUCCESS,
  GET_COVID_RESOURCE_REQUEST,
  GET_COVID_RESOURCE_SUCCESS,
  GET_COVID_ZONE_REQUEST,
  GET_COVID_ZONE_SUCCESS,
  GET_COVID_STATEWISE_REQUEST,
  GET_COVID_STATEWISE_SUCCESS
} from "../constants/action-types";

export const getCurrentLocation = (data) => ({
  type: GET_CURRENT_LOCATION,
  payload: data,
})

export const getCovidDataRequest = () => ({
  type: GET_COVID_DATA_REQUEST,
});

export const getCovidDataSuccess = (data) => ({
  type: GET_COVID_DATA_SUCCESS,
  payload: data,
});

export const getCovidResourceRequest = () => ({
  type: GET_COVID_RESOURCE_REQUEST,
});

export const getCovidResourceSuccess = (data) => ({
  type: GET_COVID_RESOURCE_SUCCESS,
  payload: data,
});

export const getCovidZoneRequest = () => ({
  type: GET_COVID_ZONE_REQUEST,
});

export const getCovidZoneSuccess = (data) => ({
  type: GET_COVID_ZONE_SUCCESS,
  payload: data,
});

export const getCovidStateWiseRequest = () => ({
  type: GET_COVID_STATEWISE_REQUEST,
});

export const getCovidStateWiseSuccess = (data) => ({
  type: GET_COVID_STATEWISE_SUCCESS,
  payload: data,
});