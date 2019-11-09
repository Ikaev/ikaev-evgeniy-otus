import React from 'react'

const CityWeatherInfo = ({ city, addToFavorites }) => {
    const handleCLick = () => {
        addToFavorites(city.id)
    };
    if (city) {
        return <div>
            <h3>{city.name}</h3>
            <p>{city.country}</p>
            <h4>Wind info</h4>
            <div>
                <span>Speed:</span>
                <span>{city.wind.speed}</span>
            </div>
            <div>
                <span>Direction:</span>
                <span>{city.wind.direction}</span>
            </div>
            <h4>Temperature info</h4>
            <div>
                <span>Average temperature:</span>
                <span>${city.temperature.average_temperature}C</span>
            </div>
            <div>
                <span>Min temperature:</span>
                <span>${city.temperature.temp_min}C</span>
            </div>
            <div>
                <span>Max temperature:</span>
                <span>${city.temperature.temp_max}C</span>
            </div>
            <button onClick={handleCLick}>Add to favorites</button>
        </div>
    }
    return <div>
        <p>No city selected</p>
    </div>

};
export default CityWeatherInfo