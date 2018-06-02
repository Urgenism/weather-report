//init weather object
const weather = new Weather('Kathmandu','Bagmati');

// init UI object
const ui = new UI;

//get weather on DOMload
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather() {
  weather.getWeather()
    .then(data => ui.paint(data))
    .catch(err => console.log(error));
}