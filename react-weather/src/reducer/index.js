import {combineReducers} from "redux";
import cities from "./cities"
import selectedCityId from "./selectedCity";

export default combineReducers({
    cities,
    selectedCityId
})