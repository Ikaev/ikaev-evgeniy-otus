import {SELECTED_CITY} from "../constants"

export default (selectedCityId = '', action) => {
    const { type, payload } = action;
    switch (type) {
        case SELECTED_CITY:
            return selectedCityId = payload
    }
    return selectedCityId
}