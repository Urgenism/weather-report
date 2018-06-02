//init weather object
const weather = new Weather('Kathmandu','Bagmati');

//get weather on DOMload
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather() {
  weather.getWeather()
    .then(data => console.log(data))
    .catch(err => console.log(error));
}