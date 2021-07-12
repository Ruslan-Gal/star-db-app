import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';
import './style.scss';

export default class PersonDetails extends Component {
  state = {
    person: null,
    update: false,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ update: true });
      this.updatePerson();
    }
  }

  swapiService = new SwapiService();

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService.getPerson(personId).then((person) => {
      this.setState({ person, update: false });
    });
  }

  render() {
    const { update, person } = this.state;

    if (!person) {
      return <span>Select the person from a list</span>;
    }

    const spinner = update ? <Spinner /> : null;
    const content = !update ? <PersonView person={person} /> : null;

    return (
      <div className='person-details card'>
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <React.Fragment>
      <img
        className='person-image'
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />

      <div className='card-body'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender</span>
            <span>{gender}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
