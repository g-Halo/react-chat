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
        contacts: [
          {
            id: 1, nickname: 'Nancy', username: 1, time: '3 分钟前', unread: 2, last_message: { created_at: '2019-09-01 18:22:21', body: '在吗？' }
          },
          {
            id: 2, nickname: 'Cat', username: 2, time: '3 分钟前', unread: 2, last_message: { created_at: '2019-09-01 18:22:21', body: '上次吃饭没给你钱呢' }
          },
          {
            id: 3, nickname: 'Macp', username: 3, time: '3 分钟前', unread: 2, last_message: { created_at: '2019-09-01 18:22:21', body: '不说了，洗澡了' }
          },
          {
            id: 4, nickname: 'Lucy', username: 4, time: '3 分钟前', unread: 2, last_message: { created_at: '2019-09-01 18:22:21', body: '来啊，打王者啊' }
          },
        ]
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

export function initalContacts() {
  return {
    type: types.GET_CONTACTS
  };
}

export function changeContact(user) {
  return {
    type: types.CHANGE_CONTACT,
    activeUserId: user.username
  };
}
