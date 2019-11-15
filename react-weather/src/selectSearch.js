import React from 'react'

const Select = ({ cities, handleChange }) => {
    const handleSearchChange = (event) => {
        handleChange(event.currentTarget.value)
    };

    return <label>
        City:
        <select onChange={handleSearchChange}>
            <option value={""} selected>not selected</option>
            {cities.map((city) => {
                return <option value={city.id}>{city.name}</option>
            })}
        </select>
    </label>
};
export default Select
