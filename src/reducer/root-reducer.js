import { combineReducers } from 'redux';
import covidReducer from './covid-reducer';
import covidZoneReducer from './covid-zone-reducer';
import covidStateWiseReducer from "./covid-state-wise-reducer";


const rootReducer = combineReducers({
    covidReducer,
    covidZoneReducer,
    covidStateWiseReducer
});

export default rootReducer;