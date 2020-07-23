import {
  GET_CURRENT_LOCATION,
  GET_COVID_DATA_REQUEST,
  GET_COVID_DATA_SUCCESS,
  GET_COVID_RESOURCE_REQUEST,
  GET_COVID_RESOURCE_SUCCESS,
} from "../constants/action-types";

const initialState = {
  districtList: [],
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return { ...state, isLoading: true , location: action.payload};
    case GET_COVID_DATA_REQUEST:
      return { ...state, isLoading: true };

    case GET_COVID_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        covidData: action.payload,
      };

    case GET_COVID_RESOURCE_REQUEST:
      return { ...state, isLoading: true };

    case GET_COVID_RESOURCE_SUCCESS:
      const { resources } = action.payload;
      return {
        ...state,
        isLoading: false,
        resources
      };
    default:
      return state;
  }
};

export default covidReducer;
