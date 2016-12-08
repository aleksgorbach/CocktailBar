import { combineReducers } from "redux";

import ingredients from "./ingredients";
import navigation from "./navigation";

export default combineReducers({
    ingredients,
    navigation
})