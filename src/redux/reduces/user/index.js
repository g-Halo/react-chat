import types from './types';

const initialState = {
  user: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: {username: 'test-01'}
      };
    default:
      return state;
  }
}
