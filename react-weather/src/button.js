import React from 'react'

const Button = ({ cityId, deleteInFavorites, addToFavorites, label }) => {
    const handleCLick = () => {
        if (deleteInFavorites) {
            deleteInFavorites(cityId)
        } else if (addToFavorites) {
            addToFavorites(cityId)
        }
    };
    return <button onClick={handleCLick}>{label}</button>

};
export default Button
