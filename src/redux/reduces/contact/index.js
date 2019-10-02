import types from './types';

const initialState = {
  contacts: [],
  activeUserId: 1,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_CONTACTS:
      return {
        ...state,
        contacts: action.data
      };
    case types.CHANGE_CONTACT:
      return {
        ...state,
        activeUserId: action.activeUserId
      };
    default:
      return state;
  }
}
