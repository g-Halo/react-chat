const getToken = function () {
  return sessionStorage.getItem('login_token_key');
};

const setToken = function (value) {
  return sessionStorage.setItem('login_token_key', value);
};

export default {
  getToken,
  setToken
};
