// init storage object
const storage = new Storage;
//get stored location data
const weatherLocation = storage.getLocationData();

//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// init UI object
const ui = new UI;

//get weather on DOMload
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city');
  const state = document.getElementById('state');

  // change weather city and state
  weather.changeLocation(city,state);

  // set weather city and state
  storage.setLocationData(city, state);

  //get weather 
  getWeather();

  // close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(data => ui.paint(data));
}