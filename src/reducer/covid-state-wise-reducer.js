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
      let formattedStateWiseList = statewise.map((state) => {
        if (state.active || state.confirmed) {
          state.active = Number(state.active);
          state.confirmed = Number(state.confirmed);
          state.deaths = Number(state.deaths)
          state.recovered = Number(state.recovered)
        }
        return state;
      });
      return {
        ...state,
        stateWiseData: formattedStateWiseList,
        testData: tested,
      };
    default:
      return state;
  }
};

export default covidStateWiseReducer;
