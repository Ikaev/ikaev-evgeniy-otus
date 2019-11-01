import React, { Component } from 'react'
import {render} from "react-dom";

const CityItem = ({ city }) => {
    return <li>{city.name}</li>
}
export default CityItem
