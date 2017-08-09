import React, {Component} from 'react';
import api from '../../api.js';

const ENTER = 13;

export default class EditBookmark extends Component {
constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
}

_handleEditBookmark = () => {
    let { title: {value: title}, description: {value: description} } = this.refs;
    this.setState({
            title: this.refs.title.value,
            description: this.refs.description.value
          })
    api.editBookmark();
    if (title && description) {
    //   console.log(title)
      console.log(this.refs.description.value)
      // window.location.reload()
    }
  }

  _handleTyping = (e) => {
    
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
    if (e.keyCode===ENTER) {
      this._handleEditBookmark()
    }
  }
   
   render() {
        // let descriptionValue=this.props.boardInfo.description;
        // let titleValue=this.props.boardInfo.title;
        console.log(this)
        return (
          <div >
            <div>
              <h1>Edit Bookmark</h1>
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

             <button onClick={this._handleEditBookmark}>done!</button>
              <p>{this.state.error}</p>
            </div>
          </div>
        )
} 
}    