/* eslint-disable import/no-named-as-default */
import {combineReducers} from 'redux';
import contact from './contact';
import user from './user';
import socket from './socket';

export default combineReducers({
  contact,
  user,
  socket
});
