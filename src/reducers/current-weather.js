import { UPDATE_DATA } from '../actions/types';

const initialState = {};

const currentWeatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default currentWeatherReducer;
