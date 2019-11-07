import {CityList} from "./cityList";
import React, {Component} from "react";


export class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: props.cities,
            favoritesCities: []
        };
        this.addToFavorites = this.addToFavorites.bind(this)
    }
    addToFavorites(cityId) {
        const favoritesCity = this.state.cities.find((city) => city.id === cityId)
        const favoritesCities = this.state.favoritesCities.map(item => item);
        favoritesCities.push(favoritesCity);
        this.setState({favoritesCities});

    }
    render() {
        const { cities } = this.state;
        const { favoritesCities } = this.state;
        return (
            <div style={{height: "1000px"}}>
                <CityList key={cities.length} heading={'Список городов'} cities={cities} addToFavorites={this.addToFavorites}></CityList>
                <CityList key={favoritesCities.length} heading={'Список избранных городов'} cities={favoritesCities}></CityList>
            </div>
        );
    }
}
