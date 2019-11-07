import React, { Component } from 'react'
import CityItem from "./cityItem";

interface IProps {

}
interface Istate {
  cities: object
}
export class CityList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      cities: props.cities,
      heading: props.heading
    }
      this.addToFavorites = props.addToFavorites
  }

  render() {
    const { cities } = this.state;
    const { heading } = this.state;
    return (
        <div style={{float: "left", margin: "0 15px 0 15px"}}>
          <h3>{heading}</h3>
          <ul>
            {cities.map((city) => {
              return <CityItem addToFavorites={this.addToFavorites} key={city.id} city={city}/>
            })}
          </ul>
        </div>

    );
  }
}
