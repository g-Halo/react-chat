import api from '~/api';
import types from './types';

function saveUser({user, token}) {
  return {
    type: types.LOGIN,
    token,
    user
  };
}

const login = function (form) {
  return async dispatch => {
    try {
      const {data: {user, token}} = (await api.Post('/login', form));
      dispatch(saveUser({user, token}));
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
