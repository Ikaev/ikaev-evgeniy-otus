export function addToFavoritesCity(cityId) {
    return {
        type: 'ADD_TO_FAVORITES',
        payload: cityId
    }
}
export function deleteFromFavorites(cityId) {
    return {
        type: 'DELETE_FROM_FAVORITES',
        payload: cityId
    }
}
export function selectedCity({value}) {
    return {
        type: 'SELECTED_CITY',
        payload: value,
    }
}

