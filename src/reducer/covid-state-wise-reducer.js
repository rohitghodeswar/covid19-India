import {
  GET_COVID_STATEWISE_REQUEST,
  GET_COVID_STATEWISE_SUCCESS,
} from "../constants/action-types";

const initialState = {
  stateWise: [],
};

const covidStateWiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_STATEWISE_REQUEST:
      return { ...state, isLoading: true };

    case GET_COVID_STATEWISE_SUCCESS:
      const {statewise} = action.payload;
      return { ...state, isLoading: false, stateWiseData: statewise };
    default:
      return state;
  }
};

export default covidStateWiseReducer;
