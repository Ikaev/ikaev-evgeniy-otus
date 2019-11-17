import React from 'react'
import CityItem from "./components/cityItem";

const CityItemFormation = ({cities, handleClick}) => {
    const cityItemsArray = [];
    for (let id in cities) {
        if (cities[id].is_favorites) {
            cityItemsArray.push(cities[id])
        }
    }
    if (cityItemsArray.length > 0) {
        return (
            <ul>
                {cityItemsArray.map(city => {
                    return <CityItem handleClick={handleClick} key={city.id} cityId={city.id} cityName={city.name}/>
                })}
            </ul>
        )
    } else {
        return <div>Favorites list is empty</div>
    }
}
const CityList = ({cities, heading, handleClick}) => {
    return <div style={{float: "left", margin: "0 15px 0 15px"}}>
        <h3>{heading}</h3>
        <CityItemFormation cities={cities} handleClick={handleClick}/>
    </div>
};

export default CityList
