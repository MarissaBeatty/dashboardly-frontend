import api from './api';

module.exports = {
  login(email, password) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestLogin(email, password)
      .then(res => localStorage.token = res.body.token)
    }
  },

  signup(email, password) {
    if (localStorage.token) {
      throw new Error('')
    }
    else {
      return api.requestSignup(email, password)
      .then(res => api.requestLogin(email, password))
      .then(res => localStorage.token = res.body.token)
    }
  },

  getToken() {
    return localStorage.token
  },

  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => localStorage.setItem("token", ""))
  },

  isLoggedIn() {
    return !!localStorage.token
    
  },
  
}
