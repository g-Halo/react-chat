// import session from '~/utils/session';
import socket from '~/api/socket';
const initialState = {
  socket: socket
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // case types.LOGIN:
    //   session.setToken(action.token);
    //   return {
    //     ...state,
    //     user: action.user
    //   };
    default:
      return state;
  }
}
