import React from "react";
import Select from "react-select";

const SelectCity = ({ cities, selectedCity }) => {
    return <Select options={cities} onChange={selectedCity}/>
};
export default SelectCity
