import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
// import CreateBoard from '../modals/CreateBoard';
import AddButton from '../elements/AddButton';

import auth from '../../auth';
import './Home.css';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: []
   };
  }
  
  componentDidMount() {
    this._fetchBoards();
  }
  
  _fetchBoards = () => {
    api.getBoardsList()
    .then(res => {
      this.setState({ 
        boards: res.body.boards 
      })
    })
    .catch(console.error)
  }
  // closeCreateBoard = () => this.setState({ isCreateBoardOpen: false })
  

  render() {
    let { boards } = this.state
    const isLoggedIn = auth.isLoggedIn()
    
    return (
      <div className="home">
        <form className="searchForm">
        <p>Search!</p>
        <input type="text" ref="searchInput" placeholder="search boards" />
        </form>
        
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
    );
  }

}
