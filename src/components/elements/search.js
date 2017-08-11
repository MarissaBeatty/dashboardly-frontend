import React, {Component} from 'react';
import './search.css';
// import api from '../../api';
// import BoardCard from '../elements/BoardCard';
// import CreateBoard from '../modals/CreateBoard';
// import AddButton from '../elements/AddButton';

// import auth from '../../auth';


const ENTER = 13;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: []
   };
   // this._handleSearch = this._handleSearch.bind(this);
  }

   _handleTyping = (e) => {
    
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
    if (e.keyCode===ENTER) {
      this._handleSearch()
    }
  }

  search = (e) => {
  	e.preventDefault();
  	this.props._handleSearch(this.refs.keyword.value)
    // this._handleSearch(this.refs.keyword.value)
  }


  render() {
  	return(

  			<form className="searchForm">
		        <input type="text" 
		          ref="keyword" 
		          placeholder="search boards" 
              className="search-box-input"
		          // onKeyUp={this._handleTyping}

		        />
		        <button className="search-box-button"
		        onClick={this.search}>&#x1f50d;</button>

		    </form>


  		)
  }
}

// console.log(this.refs.keyword.value)
   //  console.log(this.props)
