import session from '~/utils/session';
import types from './types';

const initialState = {
  user: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      session.setToken(action.token);
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
