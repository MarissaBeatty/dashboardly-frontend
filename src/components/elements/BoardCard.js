import React, {Component} from 'react';
import { Link } from 'react-router';
import auth from '../../auth';
import EditBoard from '../modals/EditBoard';
import DeleteBoard from '../modals/DeleteBoard';

import './BoardCard.css';

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditBoardOpen: false,
      isDeleteBoardOpen: false

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
              onClick={()=>this.setState({ isEditBoardOpen: !this.state.isEditBoardOpen })}>Edit {this.props.title}
              </button> : null} 
          
            {this.state.isEditBoardOpen ? <EditBoard BoardInfo={this.props}/> : null }
          
            {auth.isLoggedIn && auth.id === this.state.id ? 
              <button className="deleteBoardButton" 
              onClick={()=>this.setState({ isDeleteBoardOpen: !this.state.isDeleteBoardOpen })}>Delete {this.props.title}
              </button> : null }

            {this.state.isDeleteBoardOpen ? <DeleteBoard BoardInfo={this.props}/> : null }  
          
        </div>
    );
  }

}
