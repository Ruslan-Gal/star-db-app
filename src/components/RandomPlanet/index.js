import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import './style.scss';

export default class RandomPlanet extends Component {
  state = {
    id: null,
    name: null,
    population: null,
    rorationPeriod: null,
    diameter: null,
  };

  swapiservice = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiservice.getPlanet(id).then((planet) => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rorationPeriod: planet.roration_period,
        diameter: planet.diameter,
      });
    });
  }

  render() {
    const { id, name, population, rorationPeriod, diameter } = this.state;

    return (
      <div className='random-planet jumbotron rounded'>
        <img
          className='planet-image'
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Population</span>
              <span>{population}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Roration Period</span>
              <span>{rorationPeriod}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
