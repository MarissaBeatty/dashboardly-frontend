import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
// import CreateBoard from '../modals/CreateBoard';
import AddButton from '../elements/AddButton';
import Search from '../elements/search'

import auth from '../../auth';
import './Home.css';
<link href="https://fonts.googleapis.com/css?family=Comfortaa|Montserrat" rel="stylesheet" />

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [], 
      modals: closed, 
      userId: null
   };
  }
 
  componentDidMount() {
    this._fetchBoards();
  }
  
  _fetchBoards = () => {
    // console.log(this);
    api.getBoardsList(auth.getToken())
    .then(res => {
      this.setState({ 
        boards: res.body.boards 
      })
    })
    .catch(console.error)
  }

    _handleSearch = (keyword) => {
    api.getSearch(keyword)
    .then(res => {
          this.setState({ 
            boards: res.body.boards
          })
    })
  }

  render() {
    let { boards } = this.state
    const isLoggedIn = auth.isLoggedIn()
    console.log(this.state.boards[0])

    
    return (
      <div className="home">

        <div className="inner">
          <div className="content">
            <form className="searchForm">
            
              <div className="search-box-wrapper">
                <input type="text" ref="searchInput" placeholder="search board..." className="search-box-input" />
                <button className="search-box-button">&#x1f50d;</button>
              </div>
            
            </form>

            <div className="wrapper">
              { boards.map(b =>
                <BoardCard
                  key={b.id}
                  id={b.id}
                  title={b.title}
                  description={b.description}
                  updatedAt={b.updatedAt} 
                /> 
            )}



            {isLoggedIn ? <AddButton /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
