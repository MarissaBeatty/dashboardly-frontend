import React, {Component} from 'react';
import api from '../../api.js';
import BoardCard from '../elements/BookmarkCard';

const ENTER = 13;

export default class DeleteBoard extends Component {
constructor(props) {
    super(props);
    this.state = {
      // title: "",
      // url: ""
    }
    this._handleDeleteBoard = this._handleDeleteBoard.bind(this);
}

_handleDeleteBoard = () => {
  var boardId = this.props.BoardInfo.id;
    // this.setState({
    //         // title: this.props.BoardInfo.title,
    //         // url: this.props.BoardInfo.url,
    //         id: this.props.BoardInfo.id
    //       })
    api.deleteBoard(boardId);
      // console.log(this.props.BoardInfo.id)
      // window.location.reload()
    }
  

  _handleTyping = (e) => {
    
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
    if (e.keyCode===ENTER) {
      this._handleDeleteBoard()
    }
  }
   
   render() {
        // console.log(this.props.BoardInfo, "BoardInfo")

        return (
          <div >
            <div>
              <h1>Delete Board</h1>
             <button onClick={this._handleDeleteBoard}>delete!</button>
              <p>{this.state.error}</p>
            </div>
          </div>
        )
} 
}    