import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
// import CreateBoard from '../modals/CreateBoard';
import AddButton from '../elements/AddButton';
import Search from '../elements/search'
import auth from '../../auth';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [], 
      modals: closed
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
    // console.log(this.state.boards[0])

    // console.log(boards.id, "b id")
    
    return (
      <div className="home">

        <div className="inner">
          <div className="content">
            <div className="searchForm">
            
              <div className="search-box-wrapper">
                
                <Search _handleSearch={this._handleSearch} />
              </div>
            
            </div>

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
