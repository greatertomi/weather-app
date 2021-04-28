import { SET_ALERT, UPDATE_UNIT } from './types';
import { fetchWeatherData } from './weather';

export const updateWeatherUnit = (unit) => async (dispatch) => {
  try {
    dispatch(fetchWeatherData(unit));
    dispatch({
      type: UPDATE_UNIT,
      payload: unit
    });
  } catch (err) {
    const alertData = {
      type: 'error',
      message: 'Error',
      description: 'An error occurred while fetching new weather data',
      show: true
    };
    dispatch({
      type: SET_ALERT,
      payload: alertData
    });
  }
};
