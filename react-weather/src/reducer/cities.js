import cities from "../cities";
import {ADD_TO_FAVORITES} from "../constants"
import {DELETE_FROM_FAVORITES} from "../constants"

export default (citiesState = cities, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_FAVORITES:
            citiesState[payload].is_favorites = true;
            return {...citiesState};
        case DELETE_FROM_FAVORITES:
            citiesState[payload].is_favorites = false;
            return {...citiesState};
    }
    return citiesState
}