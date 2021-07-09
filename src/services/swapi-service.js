export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  async getResource(url = '') {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    // will return promise
    return await response.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}

// const swapi = new SwapiService();
// swapi.getResource().then((body) => console.log(body));
// swapi.getAllPeople().then((people) => {
//   people.forEach((p) => {
//     console.log(p.name);
//   });
// });
