import { combineReducers } from 'redux';
import covidReducer from './covid-reducer';
import covidZoneReducer from './covid-zone-reducer';
import covidStateWiseReducer from "./covid-state-wise-reducer";
import covidResourceReducer from "./covid-resource-reducer";
import covidLoadingReducer from "./covid-loading-reducer";



const rootReducer = combineReducers({
    covidReducer,
    covidZoneReducer,
    covidStateWiseReducer,
    covidResourceReducer,
    covidLoadingReducer
});

export default rootReducer;