import React from 'react'
import CityItem from "./cityItem";

const CityItemFormation = ({allCities, clickFunction}) => {
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
                    return <CityItem clickFunction={clickFunction} key={city.id} cityId={city.id} cityName={city.name}/>
                })}
            </ul>
        )
    } else {
        return <div>Favorites list is empty</div>
    }
}
const CityList = ({cities, heading, clickFunction}) => {
    return <div style={{float: "left", margin: "0 15px 0 15px"}}>
        <h3>{heading}</h3>
        <CityItemFormation allCities={cities} clickFunction={clickFunction}/>
    </div>
};
export default CityList
