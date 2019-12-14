import types from './types';

const initialState = {
  contacts: [],
  activeUsername: '',
  currentRoomId: '',
  contact: {}
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
        activeUsername: action.activeUsername,
        currentRoomId: action.currentRoomId
      };
    case types.GET_CONTACT:
      const {user, messages} = action.data;
      return {
        ...state,
        contact: {
          user,
          messages
        }
      };
    case types.SEND_MESSAGE:
      console.log(action.data)
    default:
      return state;
  }
}
