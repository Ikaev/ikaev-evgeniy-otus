import CityList from "./cityList";
import React, {Component} from "react";
import SelectCity from "./components/select";
import CityWeatherInfo from "./cityWeatherInfo";
import {connect} from 'react-redux';
import {selectedCity, addToFavoritesCity, deleteFromFavorites} from "./ac";

export class App extends Component {
    constructor(props) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
    }
    getOptions() {
        const { cities } = this.props;
        const selectOptionsArray = [];
        for(let id in cities) {
            selectOptionsArray.push({value: id, label: cities[id].name})
        }
        return selectOptionsArray
    }

    render() {
        const  { cities, selectedCityId, selectedCity, addToFavoritesCity, deleteFromFavorites } = this.props;
        return (
            <div style={{height: "1000px"}}>
                <div style={{float: "left", margin: "0 15px 0 15px", width: '300px'}}>
                    <h3>Search</h3>
                    <SelectCity  cities={this.getOptions()} selectedCity={selectedCity}/>
                    <CityWeatherInfo handleClick={addToFavoritesCity} cityId={selectedCityId} city={cities[selectedCityId]}/>
                </div>
                <CityList cities={cities} handleClick={deleteFromFavorites} heading={'Список избранных городов'}/>
            </div>
        );
    }
}
const mapStateToProps = ({ cities, selectedCityId }) => ({
    cities,
    selectedCityId,
});

const mapDispatchToProps = {
    selectedCity,
    addToFavoritesCity,
    deleteFromFavorites
};
export default connect(mapStateToProps, mapDispatchToProps)(App)
