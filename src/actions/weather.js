import axios from 'axios';

import { FETCH_DATA } from './types';
import { WEATHER_URL } from '../utils/constants';

export const fetchWeatherData = () => async (dispatch) => {
  try {
    const res = await axios.get(WEATHER_URL);
    const originalData = res.data.list;
    const dates = [...new Set(originalData.map((e) => e.dt_txt.slice(0, 10)))];
    const weatherData = [];
    let idCount = 1;
    for (const date of dates) {
      const dateWeather = originalData.filter(
        (e) => e.dt_txt.slice(0, 10) === date
      );
      const avgTemp =
        dateWeather.reduce((total, num) => total + num.main.temp, 0) /
        dateWeather.length;
      const avgHumidity =
        dateWeather.reduce((total, num) => total + num.main.humidity, 0) /
        dateWeather.length;
      const avgWind =
        dateWeather.reduce((total, num) => total + num.wind.speed, 0) /
        dateWeather.length;
      const details = dateWeather.map((e) => ({
        time: e.dt_txt.slice(11),
        temp: e.main.temp,
      }));
      const oneWeatherData = {
        id: idCount,
        location: res.data.city.name,
        date,
        temp: Math.round(avgTemp),
        humidity: Math.round(avgHumidity),
        wind: Math.round(avgWind),
        current: idCount === 1,
        details,
      };
      weatherData.push(oneWeatherData);
      idCount += 1;
    }
    dispatch({
      type: FETCH_DATA,
      payload: weatherData,
    });
  } catch (err) {
    // TODO: Create an alert reducer
    console.log(err);
  }
};
