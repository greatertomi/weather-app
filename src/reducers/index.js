import { combineReducers } from 'redux';
import weatherReducer from './weather';
import currentWeatherReducer from './current-weather';

export default combineReducers({
  weather: weatherReducer,
  current: currentWeatherReducer,
});
