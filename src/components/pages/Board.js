import React, {Component} from 'react';
import api from '../../api';
import BookmarkCard from '../elements/BookmarkCard';
import auth from '../../auth';
// import AddButton from '../elements/AddButton';
import CreateBookmark from '../modals/CreateBookmark';

import './Board.css';


export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      bookmarks: [],
      updatedAt: "", 
      ownerId: ""
    };
    console.log(this.state)
  }
  
  componentDidMount() {
    this.fetchBoardData()
  }
  
  fetchBoardData = () => {
      Promise.all([
        api.getBoard(this.props.params.id),
        api.getBookmarks(this.props.params.id)
      ])
      .then(res => {
        this.setState({
          title: res[0].body.title,
          description: res[0].body.description,
          ownerId: res[0].body.ownerId,
          bookmarks: res[1].body.bookmarks, 
          isCreateBookmarkOpen: false
        })
      })
      .catch(console.error)
  }

  //    _fetchBookmark = () => {
  //   api.get()
  //   .then(res => {
  //     this.setState({ id: res.body.id })
  //   })
  //   .catch(console.error)
  //   console.log(this.state)
  // }

   
  render() {
    let { bookmarks } = this.state
    let {isCreateBoardOpen} = this.state
    return (
      <div className="board">
        <div className="bookmarks">
        { bookmarks.map(b =>
          <BookmarkCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            url={b.url}
          />
        )}
        </div>
        {auth.isLoggedIn && auth.id === this.state.id ? <i className="fa fa-plus fa-2x" 
          onClick={()=>this.setState({ isCreateBookmarkOpen: true })} /> : null }
        {this.state.isCreateBookmarkOpen ? <CreateBookmark /> : null }
 
      </div>
      
    ); 
  } 

}
