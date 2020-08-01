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
      return { ...state };

    case GET_COVID_STATEWISE_SUCCESS:
      const { statewise, tested } = action.payload;
      return { ...state, stateWiseData: statewise, testData: tested };
    default:
      return state;
  }
};

export default covidStateWiseReducer;
