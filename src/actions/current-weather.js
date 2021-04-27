import { UPDATE_DATA } from './types';

export const chooseCurrentView = (data) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_DATA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
