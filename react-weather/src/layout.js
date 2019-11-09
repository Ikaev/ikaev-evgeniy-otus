import CityList from "./cityList";
import React, {Component} from "react";
import SearchCity from "./selectSearch";
import CityWeatherInfo from "./cityWeatherInfo"

export class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritesCities: [],
            searchCity: '',
            changeCity: ''
        };
        this.addToFavorites = this.addToFavorites.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteInFavorites = this.deleteInFavorites.bind(this)
        this.cities = props.cities;
    }
    addToFavorites(cityId) {
        const favoritesCity = this.cities.find((city) => city.id === cityId)
        const favoritesCities = this.state.favoritesCities.map(item => item);
        favoritesCities.push(favoritesCity);
        this.setState({favoritesCities});
    }
    deleteInFavorites(cityId) {
        const favoritesCities = this.state.favoritesCities.map(item => item);
        const removeIndex = favoritesCities.map(function(item) { return item.id; })
            .indexOf(cityId);
        favoritesCities.splice(removeIndex, 1);
        this.setState({favoritesCities});
        console.log(removeIndex)
    }
    handleChange(cityId) {
        const searchCity = this.cities.find((city) => city.id === Number(cityId))
        this.setState({changeCity: searchCity})
    }

    render() {
        const { favoritesCities, changeCity } = this.state;
        return (
            <div style={{height: "1000px"}}>
                <div style={{float: "left", margin: "0 15px 0 15px", width: '300px'}}>
                    <h3>Search</h3>
                    <SearchCity  cities={this.cities} handleChange={this.handleChange}></SearchCity>
                    <CityWeatherInfo addToFavorites={this.addToFavorites} city={changeCity}></CityWeatherInfo>
                </div>
                <CityList deleteInFavorites={this.deleteInFavorites} heading={'Список избранных городов'} cities={favoritesCities}></CityList>
            </div>
        );
    }
}
