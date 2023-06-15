module.exports = {
  getUser: function () {
    const user = sessionStorage.getItem('user');
    console.log(user);
    try {
      return JSON.parse(user);
    } catch (err) {
      console.log('Error parsing user:', err);
      return null;
    }
  },

  getToken: function () {
    return sessionStorage.getItem('token');
  },

  setUserSession: function (user, token, accountType) {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('accountType', accountType);
  },

  resetUserSession: function () {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('accountType');
  },
};
