import {combineReducers} from 'redux';

import navigation from "./navigation";
import ingredients from "./ingredients";

export default combineReducers({
    navigation,
    ingredients
})