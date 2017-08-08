import React, {Component} from 'react';
import './CreateBookmark.css';
import api from '../../api';
import Board from '../pages/Board';
import {browserHistory as history} from 'react-router';


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
    api.getBookmarks()
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
    let { url: {value: url}, title: {value: title}, description: {value: description} } = this.refs;
    console.log(this.refs)
    this.setState({
            url: url.value,
            title: title.value,
            description: description.value
          })
    
    api.postNewBookmark();
    console.log(this.state)
    if (title && url && description) {
      window.location.reload()
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
    let { closeCreateBookmark, show } = this.props
    return (
      <div className={`CreateBookmark ${show?"show":""}`}>
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
