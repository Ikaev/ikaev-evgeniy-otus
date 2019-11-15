import CityList from "./cityList";
import React, {Component} from "react";
import SearchCity from "./selectSearch";
import CityWeatherInfo from "./cityWeatherInfo"

export class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCity: '',
            changeCityId: '',
            showAddFavoritesButton: true,
            cities: props.cities
        };
        this.addToFavorites = this.addToFavorites.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteInFavorites = this.deleteInFavorites.bind(this);
        this.prepareSelectOptionsArray = this.prepareSelectOptionsArray.bind(this);
        this.cities = this.state.cities;
    }

    addToFavorites(cityId) {
        const { cities } = this.state;
        cities[cityId].is_favorites = true;
        this.setState({cities});
    }
    deleteInFavorites(cityId) {
        const { cities } = this.state;
        cities[cityId].is_favorites = false;
        this.setState({cities});
    }
    handleChange(cityId) {
        this.setState({changeCityId: cityId})
    }

    prepareSelectOptionsArray() {
        const selectOptionsArray = [];
        for(let id in this.cities) {
            selectOptionsArray.push({id: id, name: this.cities[id].name})
        }
        return selectOptionsArray
    }

    render() {
        const { changeCityId, showAddFavoritesButton, cities } = this.state;
        return (
            <div style={{height: "1000px"}}>
                <div style={{float: "left", margin: "0 15px 0 15px", width: '300px'}}>
                    <h3>Search</h3>
                    <SearchCity  cities={this.prepareSelectOptionsArray()} handleChange={this.handleChange}/>
                    <CityWeatherInfo showButton={showAddFavoritesButton} clickFunction={this.addToFavorites} cityId={changeCityId} city={cities[changeCityId]}/>
                </div>
                <CityList clickFunction={this.deleteInFavorites} heading={'Список избранных городов'} cities={cities}/>
            </div>
        );
    }
}
