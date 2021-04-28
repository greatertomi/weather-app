import { UPDATE_UNIT } from '../actions/types';

const initialState = 'celsius';

const unitReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_UNIT:
      return payload;
    default:
      return state;
  }
};

export default unitReducer;
