import superagent from 'superagent'
import { API_HOST } from './config'

class Api {
  
  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
  )
  
  requestLogout = (token) => (
    superagent
    .delete(`${API_HOST}/auth/sessions`)
    .set('Authorization', `token ${token}`)
  )

  requestSignup = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/users`)
    .send({ email, password })
  )
  
  getAvatar = (token) => (
      superagent
      .get(`${API_HOST}/auth/me`)
    )

  getBoardsList = (page, count) => (
    superagent
    .get(`${API_HOST}/boards`)
  )
  
  getBoard = (id) => (
    superagent
    .get(`${API_HOST}/boards/${id}`)
  )

  editBoard = (id, title, description) => (
    superagent
    .patch(`${API_HOST}/boards/${id}`)
    .send(id, title, description)
    )

  postNewBoard = (title, description) => (
     superagent
    .post(`${API_HOST}/boards`)
    .send({ title, description })
    )
  
  getBookmarks = (boardId) => (
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)
  )

  postNewBookmark = (boardId) => (
    superagent
    .post(`${API_HOST}/boards/${boardId}/bookmarks`)
  )
  
}

export default new Api();
