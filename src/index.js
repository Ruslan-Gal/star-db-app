import SwapiService from './services/swapi-service';

const r = new SwapiService();
// r.getPerson(1).then((d) => console.log(d.name));

import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import RandomPlanet from './components/RandomPlanet';
import ItemList from './components/ItemList';
import PersonDetails from './components/PersonDetails';

import './common/styles/app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList />
          </div>
          <div className='col-md-6'>
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
