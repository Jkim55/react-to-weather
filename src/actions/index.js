import axios from 'axios'

const API_KEY = 'e903da0c8502337045564926919c3840'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url) //returns a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
