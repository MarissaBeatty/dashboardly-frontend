import React, {Component} from 'react';
import './BookmarkCard.css';
import auth from '../../auth';
import EditBookmark from '../modals/EditBookmark';
import DeleteBookmark from '../modals/DeleteBookmark';

export default class BookmarkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditBookmarkOpen: false, 
      isDeleteBookmarkOpen: false
    };

  }

  render() {
    // console.log(this.state)
    let { title, description, url, id } = this.props
    // console.log(this.props, "BookmarkCard props")
    return (
      <div className="bookmarkDiv">
        <a className="bookmark-card" href={url}>
          <div>
            <h2>{ title }</h2>
            <p>{ description }</p>
          </div>
          <img src={""} alt={title}/>
        </a>
        {auth.isLoggedIn && auth.id === this.state.id ? <button className="editBookmarkButton" 
          onClick={()=>this.setState({ isEditBookmarkOpen: true })}>Edit {this.props.title}</button> : null }
        {this.state.isEditBookmarkOpen ? <EditBookmark BookmarkInfo={this.props}/> : null } 
        
        {auth.isLoggedIn && auth.id === this.state.id ? <button className="deleteBookmarkButton" 
          onClick={()=>this.setState({ isDeleteBookmarkOpen: true })}>Delete {this.props.title}</button> : null }
        {this.state.isDeleteBookmarkOpen ? <DeleteBookmark BookmarkInfo={this.props}/> : null }  
      </div>
    );
  }

}
