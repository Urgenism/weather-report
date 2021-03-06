class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.himidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w.feels-like');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');
  }

  paint(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.icon.setAttribute('src', weather.icon_url);
    this.humidity.textContent = `Relative humidity: ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Feels like: ${weather.feelslike_string}`;
    this.wind.textConent = `Wind: ${weather.wind_string}`;
    this.dewpoint.textContent = `Dewpoint: ${weather.dewpoint_string}`;
  }
}