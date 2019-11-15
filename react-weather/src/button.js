import React from 'react'

const Button = ({ cityId, clickFunction, label }) => {
    return <button onClick={clickFunction.bind(this, cityId)}>{label}</button>
};
export default Button
