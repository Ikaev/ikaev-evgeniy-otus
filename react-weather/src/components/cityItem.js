import React from 'react'
import Button from "./button";

const CityItem = ({ cityName, ...props }) => {
    return <li>
        {cityName}
        <Button label={'Delete'} {...props}/>
    </li>
};
export default CityItem
