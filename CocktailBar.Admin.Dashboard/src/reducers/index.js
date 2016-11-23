import {combineReducers} from 'redux';

import navigation from "./navigation";
import ingredients from "./ingredients";
import pagination from "./pagination";
import { reducer as formReducer} from "redux-form";

export default combineReducers({
    navigation,
    ingredients,
    pagination,
    form: formReducer
})