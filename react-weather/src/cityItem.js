import React from 'react'

const CityItem = ({ cityName, deleteInFavorites }) => {
    const handleCLick = () => { //вынести в компонент
        deleteInFavorites(city.id)
    };
    return <li>
        {cityName}
        <button onClick={handleCLick}>Delete</button>
    </li>
};
export default CityItem
