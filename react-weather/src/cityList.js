import React from 'react'
import CityItem from "./cityItem";


const CityList = ({ cities, heading, deleteInFavorites }) => {
    const CityItemFormation = allCities => {
        for(let id in allCities) {
            if (allCities[id].is_favorites) {
                return <CityItem deleteInFavorites={deleteInFavorites}  key={id} city={allCities[id].name}/>
            }
            else {
                return null
            }
        }
    }
    return <div style={{float: "left", margin: "0 15px 0 15px"}}>
            <h3>{heading}</h3>
            <ul>
                <CityItemFormation allCities={cities}/>
            </ul>
        </div>
};
export default CityList
