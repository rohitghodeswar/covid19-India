import {
  GET_CURRENT_LOCATION,
  GET_COVID_DATA_REQUEST,
  GET_COVID_DATA_SUCCESS,
} from "../constants/action-types";

const initialState = {
  districtList: [],
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return { ...state, location: action.payload };
    case GET_COVID_DATA_REQUEST:
      return { ...state};

    case GET_COVID_DATA_SUCCESS:
      return {
        ...state,
        covidData: action.payload,
      };
    default:
      return state;
  }
};

export default covidReducer;
