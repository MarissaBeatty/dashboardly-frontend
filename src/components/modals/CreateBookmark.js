import React, {Component} from 'react';
import './CreateBookmark.css';
import api from '../../api';
import auth from '../../auth';
// import Board from '../pages/Board';
// import {browserHistory as history} from 'react-router';


const ENTER = 13;

export default class CreateBookmark extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chars_left: 80,
      url: "", 
      title: "", 
      description: ""
    };
    this._handleCreateBookmark = this._handleCreateBookmark.bind(this);
  }

  _fetchBookmarks = () => {
    api.getBookmarks(auth.getToken())
    .then(res=> {
      this.setState({ 
        id: res.body.id, 
        title: res.body.title, 
        url: res.body.url, 
        description: res.body.description })
    })
    .catch(console.error)
  }

  _handleCreateBookmark = () => {
    var boardId = this.props.BoardInfo.params.id;
    // console.log(this.props.BoardInfo.params.id)
    let { url: {value: url}, title: {value: title}, description: {value: description} } = this.refs;
    // console.log(this.refs)
    this.setState({
            title: this.refs.title,
            url: this.refs.url,
            description: this.refs.description
          })
    
    
    // console.log(url)
    if (title && url && description) {

      api.postNewBookmark(boardId, title, url, description, auth.getToken())
      .then(res => window.location.reload())
    }
  }

  _handleTyping = (e) => {
    
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
    if (e.keyCode===ENTER) {
      this._handleCreateBookmark()
    }
  }


  render() {
    // let { closeCreateBookmark, show } = this.props
    return (
      <div className="createBookmarkDiv">
      <div>
        <h1>Create New Bookmark</h1>
        <input type="text" 
          ref="url" 
          placeholder="Website URL"
          maxLength="100"
            onKeyUp={this._handleTyping}
          />
        <input type="title" 
          ref="title" 
          placeholder="Title"
          maxLength="30"
            onKeyUp={this._handleTyping}
          />
          <input type="text" 
          ref="description" 
          placeholder="Description"
          maxLength="80"
            onKeyUp={this._handleTyping}
          />
          <p>{this.state.chars_left}</p>

          <button onClick={this._handleCreateBookmark}>create</button>
          <p>{this.state.error}</p>
      </div>
      </div>
    ); 
  }

}
