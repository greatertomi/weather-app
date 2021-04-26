import axios from 'axios';

import { FETCH_DATA } from './types';

export const fetchWeatherData = () => async (dispatch) => {
  console.log('here');
  const url =
    'https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40';
  const res = await axios.get(url);
  console.log('action', res.data);
  try {
    dispatch({
      type: FETCH_DATA,
      payload: res.data,
    });
  } catch (err) {
    // TODO: Create an alert reducer
    console.log(err);
  }
};
