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
            changeCity: '',
            showAddFavoritesButton: true
        };
        this.addToFavorites = this.addToFavorites.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteInFavorites = this.deleteInFavorites.bind(this);
        this.checkBeOnFavoritesCities = this.checkBeOnFavoritesCities.bind(this)
        this.cities = props.cities;
    }
    addToFavorites(cityId) {
        const favoritesCity = this.cities.find((city) => city.id === cityId);
        const favoritesCities = this.state.favoritesCities.map(item => item);
        favoritesCities.push(favoritesCity);
        this.setState({favoritesCities}, this.checkBeOnFavoritesCities.bind(this, cityId));

    }
    deleteInFavorites(cityId) {
        const favoritesCities = this.state.favoritesCities.map(item => item);
        const removeIndex = favoritesCities.map(function(item) { return item.id; })
            .indexOf(cityId);
        favoritesCities.splice(removeIndex, 1);
        this.setState({favoritesCities}, this.checkBeOnFavoritesCities.bind(this, cityId));
    }
    handleChange(cityId) {
        const searchCity = this.cities.find((city) => city.id === Number(cityId))
        this.setState({changeCity: searchCity})
        this.checkBeOnFavoritesCities(cityId);
    }

    checkBeOnFavoritesCities(cityId) {
        const favoritesCities = this.state.favoritesCities.map(item => item);
        const beOnFavoritesCities = favoritesCities.find(city => city.id === Number(cityId))
        if (beOnFavoritesCities) {
            this.setState({showAddFavoritesButton: false})
        } else {
            this.setState({showAddFavoritesButton: true})
        }
    }

    render() {
        const { favoritesCities, changeCity, showAddFavoritesButton } = this.state;
        return (
            <div style={{height: "1000px"}}>
                <div style={{float: "left", margin: "0 15px 0 15px", width: '300px'}}>
                    <h3>Search</h3>
                    <SearchCity  cities={this.cities} handleChange={this.handleChange}></SearchCity>
                    <CityWeatherInfo showButton={showAddFavoritesButton} addToFavorites={this.addToFavorites} city={changeCity}></CityWeatherInfo>
                </div>
                <CityList deleteInFavorites={this.deleteInFavorites} heading={'Список избранных городов'} cities={favoritesCities}></CityList>
            </div>
        );
    }
}
