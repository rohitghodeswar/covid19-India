import {
  GET_COVID_LOADING_REQUEST,
  GET_COVID_LOADING_SUCCESS,
} from "../constants/action-types";

const initialState = {
  isLoading: false,
};

const covidLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_LOADING_REQUEST:
      return { ...state, isLoading: true };

    case GET_COVID_LOADING_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default covidLoadingReducer;
