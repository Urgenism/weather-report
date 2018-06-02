class Weather {
  contructor(city, state) {
    this.apiKey = "99dfe35fcb7de1ee";
    this.city = city;
    this.state = state;
  }

  //fetch weathe from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const data = await response.json();
    return data.current_observation;
  }

  //change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }

}