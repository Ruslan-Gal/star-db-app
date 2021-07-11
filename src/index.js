import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import RandomPlanet from './components/RandomPlanet';
import ItemList from './components/ItemList';
import PersonDetails from './components/PersonDetails';

import './common/styles/app.scss';

export default class App extends Component {
  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onItemSelected={this.onPersonSelected} />
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
