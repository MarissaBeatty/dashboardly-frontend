import React, {Component} from 'react';
// import onClickOutside from 'react-onclickoutside';
import auth from '../../auth';
import './CreateBoard.css';
// import AddButton from '../elements/AddButton';
// import ToggleDisplay from 'react-toggle-display';
import api from '../../api.js';
import {browserHistory as history} from 'react-router';

const ENTER = 13;

export default class CreateBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chars_left: 80,
      title: "",
      description: "", 
      unlisted: false
      // ownerId: null
    };
    this._handleCreateBoard = this._handleCreateBoard.bind(this);
     // console.log(this.state)
  }
  // handleClickOutside = () => {
  //   this.props.closeCreateBoard();
  // }


   _fetchBoard = () => {
    api.getBoard()
    .then(res => {
      this.setState({ id: res.body.id })
    })
    .catch(console.error)
  }

   _handleCreateBoard = () => {
    let { title: {value: title}, description: {value: description} } = this.refs;
    this.setState({
            title: this.refs.title,
            description: this.refs.description 
            // ownerId: auth.id
          })

    
    if (title && description) {
      // console.log(description, "description on createBoard")
      // console.log(title, "title on createBoard")
      // console.log(this.refs)
      // console.log(this.state.unlisted)
      var unlisted = this.state.unlisted;
      api.postNewBoard(title, description, unlisted, auth.getToken())
      .then(res => history.push(`/boards/${res.body.id}`))
      .catch(console.error)
    }
  }

  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
    if (e.keyCode===ENTER) {
      this._handleCreateBoard()
    }
  }
  
  render() {
    // console.log(this.refs)
    // let { closeCreateBoard, show } = this.props
    return (
      <div className="createBoardDiv">
        <div className="innerCreateBoardDiv">
          <h1>Create New Board</h1>
          <input type="title" 
          ref="title" 
          placeholder="Title"
          maxLength="30"
            onKeyUp={this._handleTyping}
          />
          <input type="text" 
          ref="description" 
          placeholder="Description"
          maxLength="80"
            onKeyUp={this._handleTyping}
          />
          <div className="radioDiv">
            <label>
              set as unlisted:
              <input type="checkbox"
              ref="unlisted"
              name="set as unlisted"
              onClick={()=>this.setState({ unlisted: true })}
               />
            </label>
          </div>


          <button className="create-board-button" onClick={this._handleCreateBoard}>create</button>

          <p>{this.state.error}</p>
        </div>
      </div>
      
      
    );
  }

}





