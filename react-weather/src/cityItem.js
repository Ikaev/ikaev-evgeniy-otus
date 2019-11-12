import React from 'react'

const CityItem = ({ city, deleteInFavorites }) => {
    const handleCLick = () => { //вынести в компонент
        deleteInFavorites(city.id)
    };
    return <li>
        {city.name}
        <button onClick={handleCLick}>Delete</button>
    </li>
};
export default CityItem
