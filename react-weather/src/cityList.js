import React from 'react'
import CityItem from "./cityItem";

const CityItemFormation = ({ allCities, deleteInFavorites }) => {
    const cityItemsArray = []
    for(let id in allCities) {
        if (allCities[id].is_favorites) {
            cityItemsArray.push(allCities[id])
        }
    }
    if (cityItemsArray.length > 0) {
        return (
            cityItemsArray.map(city => {
                return <CityItem deleteInFavorites={deleteInFavorites}  key={city.id} cityName={city.name}/>
            })
        )
    } else {
        return <div>Список избранных городов пуст</div>
    }
}
const CityList = ({ cities, heading, deleteInFavorites }) => {

    return <div style={{float: "left", margin: "0 15px 0 15px"}}>
            <h3>{heading}</h3>
            <ul>
                <CityItemFormation allCities={cities} deleteInFavorites={deleteInFavorites}/>
            </ul>
        </div>
};
export default CityList
