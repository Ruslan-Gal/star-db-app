import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './style.scss';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    return (
      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className='col-md-6'>
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
