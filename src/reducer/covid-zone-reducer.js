import {
  GET_COVID_ZONE_REQUEST,
  GET_COVID_ZONE_SUCCESS,
} from "../constants/action-types";

const initialState = {
  zones: [],
};

const covidZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_ZONE_REQUEST:
      return { ...state };

    case GET_COVID_ZONE_SUCCESS:
      const { zones } = action.payload;
      return { ...state, zones };
    default:
      return state;
  }
};

export default covidZoneReducer;
