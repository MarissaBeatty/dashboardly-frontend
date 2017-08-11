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
 
  getSearch = (keyword) => (
    superagent
    .post(`${API_HOST}/boards/search`)
    .send({keyword})
    // .get(`${API_HOST}/boards`)
    // .then(console.log(keyword, "keyword in api call"))
    )

  getBoard = (id) => (
    superagent
    .get(`${API_HOST}/boards/${id}`)
  )
  
  editBoard = (id, title, description, unlisted, token) => (
    superagent
    .patch(`${API_HOST}/boards/${id}`)
    .send({title, description, unlisted})
    .set('Authorization', `token ${token}`)
    // .then(console.log(id, "id", title, "title", description, "descr", token, "token", "inside editBoard "))
    )

  postNewBoard = (title, description, unlisted, token) => (
     superagent
    .post(`${API_HOST}/boards/`)
    .send({ title, description, unlisted })
    .set('Authorization', `token ${token}`)
    // .then(console.log(title, "title", description, "descr", unlisted, "unlisted", token, "token", "inside postnewBoard "))
    )

  deleteBoard = (id, token) => (
     superagent
    .delete(`${API_HOST}/boards/${id}`)
    .set('Authorization', `token ${token}`)
    .then(console.log(id, "board id"))
    )

  // unlistedBoard = (token) => (
  //     superagent
  //    .post 

  //   )

  getBookmarks = (boardId) => (
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)
  )

  editBookmark = (id, title, url, token) => (
    superagent
    .patch(`${API_HOST}/bookmarks/${id}`)
    .send({title, url})
    .set('Authorization', `token ${token}`)
    .then(console.log(url, "url", title, "title", id, "id", token, "token"))
    )

  deleteBookmark = (id, token) => (
    superagent
    .delete(`${API_HOST}/bookmarks/${id}`)
    .set('Authorization', `token ${token}`)
    .then(console.log(id, "id"))
    )

  postNewBookmark = (boardId,  title, url, description, token) => (
    superagent
    .post(`${API_HOST}/boards/${boardId}/bookmarks`)
    .send({ title, url, description })
    .set('Authorization', `token ${token}`)
    // .then(console.log(boardId, "boardId", title, "title",  url, "url", description, "description"))
  )
  
}

export default new Api();
