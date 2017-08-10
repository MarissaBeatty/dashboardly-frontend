import React, {Component} from 'react';
import api from '../../api.js';
import BookmarkCard from '../elements/BookmarkCard';
import auth from '../../auth';

const ENTER = 13;

export default class DeleteBookmark extends Component {
constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: ""
    }
}

_handleDeleteBookmark = () => {
  var bookmarkId = this.props.BookmarkInfo.id;
    // let { title: {value: title}, url: {value: url}, id: {value: id} } = this.refs;
    // this.setState({
    //         title: this.props.BookmarkInfo.title,
    //         url: this.props.BookmarkInfo.url
    //       })
    api.deleteBookmark(bookmarkId, auth.getToken())
    .then(res => window.location.reload())
    }

  _handleTyping = (e) => {
    
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
    if (e.keyCode===ENTER) {
      this._handleDeleteBookmark()
    }
  }
   
   render() {
        // console.log(this.props.BookmarkInfo, "BookmarkInfo")

        return (
          <div >
            <div>
              <h1>Delete Bookmark</h1>
              

             <button onClick={this._handleDeleteBookmark}>delete {this.props.BookmarkInfo.title}!</button>
              <p>{this.state.error}</p>
            </div>
          </div>
        )
} 
}    