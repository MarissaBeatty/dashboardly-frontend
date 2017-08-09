import React, {Component} from 'react';
import api from '../../api.js';
// import Board from '../pages/Board.js';

const ENTER = 13;

export default class EditBoard extends Component {
constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
    // console.log(this.state, "state in constructor")
   }

_handleEditBoard = () => {
    let { title: {value: title}, description: {value: description} } = this.refs;
    this.setState({
            title: this.refs.title.value,
            description: this.refs.description.value
          })
    api.editBoard();
    if (title && description) {
    //   console.log(title)
    //   console.log(this.refs.description.value)
      window.location.reload()
    }
  }

  _handleTyping = (e) => {
    
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
    if (e.keyCode===ENTER) {
      this._handleEditBoard()
    }
  }
   
   render() {
        // let descriptionValue=this.props.boardInfo.description;
        // let titleValue=this.props.boardInfo.title;
        console.log(this)
        return (
          <div >
            <div>
              <h1>Edit Board</h1>
              <input type="title"
	            ref="title"
	            placeholder={this.title}
	            maxLength="30"
                onKeyUp={this._handleTyping}
              />
              <input type="text"
              ref="description"
              placeholder={this.state.description}
              maxLength="80"
                onKeyUp={this._handleTyping}
              />
              <p>{this.state.chars_left}</p>

             <button onClick={this._handleEditBoard}>done!</button>
              <p>{this.state.error}</p>
            </div>
          </div>
        )
} 
}