import React, { Component } from 'react'
import {render} from "react-dom";


const CityItem = ({ city, addToFavorites }) => {
    const handleCLick = () => {
        addToFavorites(city.id)
    };
    return <li>
        {city.name}
        <button onClick={handleCLick}>addToFavorites</button>
    </li>
};
export default CityItem
