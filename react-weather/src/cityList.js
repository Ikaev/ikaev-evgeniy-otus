import React from 'react'
import CityItem from "./cityItem";


const CityList = ({ cities, heading, deleteInFavorites }) => {
    return <div style={{float: "left", margin: "0 15px 0 15px"}}>
            <h3>{heading}</h3>
            <ul>
                {cities.map((city) => {
                    return <CityItem deleteInFavorites={deleteInFavorites}  key={city.id} city={city}/>
                })}
            </ul>
        </div>
};
export default CityList