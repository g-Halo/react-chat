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

const fetchContacts = function () {
  return dispatch => {
    api.Get('/contacts').then(response => dispatch(initalContacts(response)));
  };
};

export default {
  fetchContacts,
  changeContact
};
