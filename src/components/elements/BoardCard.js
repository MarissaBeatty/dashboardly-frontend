import React, {Component} from 'react';
import { Link } from 'react-router';
import auth from '../../auth';
import EditBoard from '../modals/EditBoard';

import './BoardCard.css';

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditBoardOpen: false
    };
  }
  render() {
    let { title, description, id } = this.props
     let {isEditBoardOpen} = this.state
      // console.log(this.state)
    return (
      <div className="boardCardDiv">
      <Link to={`/boards/${id}`}>
        <div className="board-card">
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
        </Link>  
          
            {auth.isLoggedIn && auth.id === this.state.id ? 
              <button className="editBoardButton" 
              onClick={()=>this.setState({ isEditBoardOpen: true })}>Edit</button> : null} 
          
            {this.state.isEditBoardOpen ? <EditBoard /> : null }
          
          
        </div>
    );
  }

}
