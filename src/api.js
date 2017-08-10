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
      .set('Authorization', `token ${token}`)
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
    .send(title, description)
    .then(console.log(id, "id", title, "title", description, "descr"))
    )

  postNewBoard = (title, description) => (
     superagent
    .post(`${API_HOST}/boards/`)
    .send({ title, description })
    .then(console.log(title, "title", description, "descr", "inside postewBoard "))
    )

  deleteBoard = (id) => (
     superagent
    .delete(`${API_HOST}/boards/${id}`)
    .then(console.log(id, "board id"))
    )
  
  getBookmarks = (boardId) => (
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)
  )

  editBookmark = (id, title, url) => (
    superagent
    .patch(`${API_HOST}/bookmarks/${id}`)
    .send(title, url)
    // .then(console.log(url, "url", title, "title", id, "id"))
    )

  deleteBookmark = (id) => (
    superagent
    .delete(`${API_HOST}/bookmarks/${id}`)
    .then(console.log(id, "id"))
    )

  postNewBookmark = (boardId,  title, url, description) => (
    superagent
    .post(`${API_HOST}/boards/${boardId}/bookmarks`)
    .send({ title, url, description })
    // .then(console.log(boardId, "boardId", title, "title",  url, "url", description, "description"))
  )
  
}

export default new Api();
