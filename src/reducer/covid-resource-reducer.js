import {
  GET_COVID_RESOURCE_REQUEST,
  GET_COVID_RESOURCE_SUCCESS,
} from "../constants/action-types";

const initialState = {
  districtList: [],
};

const covidResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_RESOURCE_REQUEST:
      return { ...state };

    case GET_COVID_RESOURCE_SUCCESS:
      const { resources } = action.payload;
      return {
        ...state,
        resources,
      };
    default:
      return state;
  }
};

export default covidResourceReducer;
