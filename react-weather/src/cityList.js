import React from 'react'
import CityItem from "./cityItem";

const CityItemFormation = ({allCities, deleteInFavorites}) => {
    const cityItemsArray = []
    for (let id in allCities) {
        if (allCities[id].is_favorites) {
            cityItemsArray.push(allCities[id])
        }
    }
    if (cityItemsArray.length > 0) {
        return (
            <ul>
                {cityItemsArray.map(city => {
                    return <CityItem deleteInFavorites={deleteInFavorites} key={city.id} cityId={city.id} cityName={city.name}/>
                })}
            </ul>
        )
    } else {
        return <div>Favorites list is empty</div>
    }
}
const CityList = ({cities, heading, deleteInFavorites}) => {
    return <div style={{float: "left", margin: "0 15px 0 15px"}}>
        <h3>{heading}</h3>
        <CityItemFormation allCities={cities} deleteInFavorites={deleteInFavorites}/>
    </div>
};
export default CityList
