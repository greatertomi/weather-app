import { UPDATE_UNIT } from './types';
import { fetchWeatherData } from './weather';

export const updateWeatherUnit = (unit) => async (dispatch) => {
  try {
    dispatch(fetchWeatherData(unit));
    dispatch({
      type: UPDATE_UNIT,
      payload: unit
    });
  } catch (err) {
    // TODO: Create an alert reducer
    console.log(err);
  }
};
