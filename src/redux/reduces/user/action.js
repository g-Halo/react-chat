import api from '~/api';
import types from './types';

function saveToken(token) {
  return {
    type: types.LOGIN,
    token
  };
}

const login = function (form) {
  return async dispatch => {
    try {
      const data = (await api.Post('/login', form));
      dispatch(saveToken(data));
      return true;
    } catch (e) {
      console.warn(e);
      return false;
    }
  };
};

export default {
  login
};
