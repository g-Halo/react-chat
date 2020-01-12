const getToken = function () {
  return sessionStorage.getItem('login_token_key');
};

const setToken = function (value) {
  return sessionStorage.setItem('login_token_key', value);
};

const saveUser = function(user) {
  return sessionStorage.setItem('currentUser', JSON.stringify(user));
}

const getUser = function() {
  const userJson = sessionStorage.getItem('currentUser');
  if (userJson === null) return null;
  return JSON.parse(userJson);
}

export default {
  getToken,
  setToken,
  saveUser,
  getUser
};
