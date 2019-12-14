import api from '~/api';
import types from './types';
import { Redirect } from 'react-router-dom'

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
      const data = await api.Post('/login', form);
      dispatch(saveUser(data));
      return <Redirect to='/' />
    } catch (e) {
      console.warn(e);
      return false;
    }
  };
};

export default {
  login
};
