import { FETCH_DATA } from '../actions/types';

const initialState = [];

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA:
      return payload;
    default:
      return state;
  }
};

export default weatherReducer;
