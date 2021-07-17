import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import RandomPlanet from './components/RandomPlanet';
import ErrorButton from './components/ErrorButton';
import ErrorIndicator from './components/ErrorIndicator';
import PeoplePage from './components/PeoplePage';

import './common/styles/app.scss';

export default class App extends Component {
  state = {
    hasError: false,
  };

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
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
