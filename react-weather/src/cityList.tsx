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
      cities: props.cities
    }
  }

  render() {
    const { cities } = this.state;
    return (
      <ul>
        {cities.map((city) => {
          return <CityItem city={city}/>
        })}
      </ul>
    );
  }
}
