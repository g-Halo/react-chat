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
    activeUserId: user.username
  };
}

function getContact(data) {
  return {
    type: types.GET_CONTACT,
    data
  };
}

const fetchContacts = function () {
  return dispatch => {
    api.Get('/contacts').then(response => dispatch(initalContacts(response)));
  };
};

const fetchContact = function (username) {
  return async dispatch => {
    const data = (await api.Get('/contact', {username}));
    dispatch(getContact(data));
  };
};

export default {
  fetchContacts,
  changeContact,
  fetchContact
};
