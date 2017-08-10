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
    var link = url
    console.log(link, "url")
    console.log(this.props, "BookmarkCard props")
    return (
      <div className="bookmarkDiv">
        <a className="bookmark-card" href={link}>
          <div>
            <h2>{ title }</h2>
            <p>{ description }</p>
          </div>
           
        </a>
        {auth.isLoggedIn && auth.id === this.state.id ? <button className="editBookmarkButton" 
          onClick={()=>this.setState({ isEditBookmarkOpen: !this.state.isEditBookmarkOpen })}>Edit {this.props.title}</button> : null }
        {this.state.isEditBookmarkOpen ? <EditBookmark BookmarkInfo={this.props}/> : null } 
        
        {auth.isLoggedIn && auth.id === this.state.id ? <button className="deleteBookmarkButton" 
          onClick={()=>this.setState({ isDeleteBookmarkOpen: !this.state.isDeleteBookmarkOpen })}>Delete {this.props.title}</button> : null }
        {this.state.isDeleteBookmarkOpen ? <DeleteBookmark BookmarkInfo={this.props}/> : null }  
      </div>
    );
  }

}
