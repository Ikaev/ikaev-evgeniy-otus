import React from 'react'

const Button = ({ cityId, handleClick, label }) => {
    return <button onClick={handleClick.bind(this, cityId)}>{label}</button>
};

export default Button
