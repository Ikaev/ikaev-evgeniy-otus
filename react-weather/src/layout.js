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
        // this.checkBeOnFavoritesCities = this.checkBeOnFavoritesCities.bind(this);
        this.prepareSelectOptionsArray = this.prepareSelectOptionsArray.bind(this);
        this.cities = this.state.cities;
    }
    // Переписать на работу с объектом
    addToFavorites(cityId) {
        const { cities } = this.state;
        cities[cityId].is_favorites = true
        this.setState({cities})
        // const favoritesCity = this.cities.find((city) => city.id === cityId);
        // const favoritesCities = this.state.favoritesCities.map(item => item);
        // favoritesCities.push(favoritesCity);
        // this.setState({favoritesCities}, this.checkBeOnFavoritesCities.bind(this, cityId));

    }
    deleteInFavorites(cityId) {
        const favoritesCities = this.state.favoritesCities.map(item => item);
        const removeIndex = favoritesCities.map(function(item) { return item.id; })
            .indexOf(cityId); //find
        favoritesCities.splice(removeIndex, 1);
        this.setState({favoritesCities}, this.checkBeOnFavoritesCities.bind(this, cityId));
    }
    handleChange(cityId) {
        this.setState({changeCityId: cityId})
        // this.checkBeOnFavoritesCities(cityId);
    }

    // checkBeOnFavoritesCities(cityId) {
    //     const favoritesCities = this.state.favoritesCities.map(item => item);
    //     const beOnFavoritesCities = favoritesCities.find(city => city.id === Number(cityId))
    //     if (beOnFavoritesCities) {
    //         this.setState({showAddFavoritesButton: false})
    //     } else {
    //         this.setState({showAddFavoritesButton: true})
    //     }
    // }

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
                    <SearchCity  cities={this.prepareSelectOptionsArray()} handleChange={this.handleChange}></SearchCity>
                    <CityWeatherInfo showButton={showAddFavoritesButton} addToFavorites={this.addToFavorites} changeCityId={changeCityId} city={cities[changeCityId]}></CityWeatherInfo>
                </div>
                <CityList deleteInFavorites={this.deleteInFavorites} heading={'Список избранных городов'} cities={cities}></CityList>
            </div>
        );
    }
}
