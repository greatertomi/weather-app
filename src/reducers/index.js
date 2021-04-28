import { combineReducers } from 'redux';
import weatherReducer from './weather';
import currentWeatherReducer from './current-weather';
import unitReducer from './unit';
import alertReducer from './alert';

export default combineReducers({
  weather: weatherReducer,
  current: currentWeatherReducer,
  unit: unitReducer,
  alert: alertReducer
});
