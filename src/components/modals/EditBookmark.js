import React, {Component} from 'react';
import api from '../../api.js';
import BookmarkCard from '../elements/BookmarkCard';
import auth from '../../auth';
import './EditBookmark.css';


const ENTER = 13;

export default class EditBookmark extends Component {
constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "", 
      unlisted: false
    }
}

_handleEditBookmark = () => {
    let { title: {value: title}, url: {value: url} } = this.refs;
    var bookmarkId = this.props.BookmarkInfo.id;
    this.setState({
            title: this.refs.title.value,
            url: this.refs.url.value
          })
    
    if (title || url) {
      api.editBookmark(bookmarkId, title, url, auth.getToken())
      .then(res => window.location.reload())

      // console.log(this.refs.title.value)
      // console.log(this.refs.url.value);
      // console.log(this.props.BookmarkInfo);
      // console.log(url, "url")
      // window.location.reload()
    }
  }

  _handleTyping = (e) => {
    
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
    if (e.keyCode===ENTER) {
      this._handleEditBookmark()
    }
  }
   
   render() {
        // let descriptionValue=this.props.boardInfo.description;
        // let titleValue=this.props.boardInfo.title;
        // console.log(this.props.BookmarkInfo)
        return (
          <div>
            <div className="innerEditBookmarkDiv">
              <h1>Edit Bookmark</h1>
              <input type="title"
	            ref="title"
	            placeholder={this.props.BookmarkInfo.title}
	            maxLength="30"
                onKeyUp={this._handleTyping}
              />
              <input type="text"
              ref="url"
              placeholder={this.props.BookmarkInfo.url}
              maxLength="100"
                onKeyUp={this._handleTyping}
              />
              <p>{this.state.chars_left}</p>

             <button className="edit-bookmark-button" onClick={this._handleEditBookmark}>done!</button>
              <p>{this.state.error}</p>
            </div>
          </div>
        )
} 
}    