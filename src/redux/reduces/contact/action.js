import api from '~/api';
import types from './types';

function initalContacts(data) {
  return {
    type: types.GET_CONTACTS,
    data
  };
}

function changeContact(user) {
  return {
    type: types.CHANGE_CONTACT,
    activeUsername: user.username,
    currentRoomId: user.room_id
  };
}

function getContact(data) {
  return {
    type: types.GET_CONTACT,
    data
  };
}

function sendData(data) {
  return {
    type: types.SEND_MESSAGE,
    data
  }
}


const fetchContacts = function () {
  return dispatch => {
    api.Get('/contacts').then(response => dispatch(initalContacts(response)));
  };
};

const fetchContact = function (user) {
  return async dispatch => {
    const data = (await api.Get('/room/contact', {username: user.username, room_id: user.room_id}));
    dispatch(getContact(data));
  };
};

const sendMessage = function(roomId, username, message) {
  return async dispatch => {
    const data = (await api.Post('/room/push', {room_id: roomId, username: username, message: message}));
    dispatch(sendData(data));
  };
}

export default {
  fetchContacts,
  changeContact,
  fetchContact,
  sendMessage
};
