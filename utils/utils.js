'use strict';

import fetch from 'node-fetch';

export async function getWeatherData(params = {location: {lat: 51.51, lon: -0.13}, units: 'metric'}) {
  
  const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${params.location.lat}&lon=${params.location.lon}&mode=json&appid=44db6a862fba0b067b1930da0d769e98`);
  const weatherData = await weatherResponse.json();

  return weatherData;
}