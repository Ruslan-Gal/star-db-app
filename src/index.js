import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import RandomPlanet from './components/RandomPlanet';
import ErrorButton from './components/ErrorButton';
import ErrorIndicator from './components/ErrorIndicator';
import PeoplePage from './components/PeoplePage';
import ItemList from './components/ItemList';
import PersonDetails from './components/PersonDetails';
import SwapiService from './services/swapi-service';

import './common/styles/app.scss';

export default class App extends Component {
  state = {
    hasError: false,
  };

  swapiService = new SwapiService();

  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className='stardb-app'>
        <Header />
        <RandomPlanet />

        <div className='row mb2 button-row'>
          <ErrorButton />
        </div>

        <PeoplePage />

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => (
                <span>
                  {item.name} <button>!</button>
                </span>
              )}
            />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name}
            />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
