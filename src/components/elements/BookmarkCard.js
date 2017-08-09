import React, {Component} from 'react';
import './BookmarkCard.css';
import auth from '../../auth';
import EditBookmark from '../modals/EditBookmark';


export default class BookmarkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditBookmarkOpen: false
    };

  }

  render() {
    console.log(this.state)
    let { title, description, url } = this.props
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
          onClick={()=>this.setState({ isEditBookmarkOpen: true })}>Edit</button> : null }
        {this.state.isEditBookmarkOpen ? <EditBookmark /> : null }  
      </div>
    );
  }

}
