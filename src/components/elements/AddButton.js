import React, {Component} from 'react';
import CreateBoard from '../modals/CreateBoard';
// import Home from '../pages/Home';
import './AddButton.css';


export default class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	isCreateBoardOpen: false
    };
  }

  // closeCreateBoard = () => this.setState({ isCreateBoardOpen: false })
  // openCreateBoard = () => this.setState({ isCreateBoardOpen: true })
  render() {
        // console.log(this.state)
    return (
    	<div>
		  <div className="add-button">
		    <i className="fa fa-plus fa-2x" 
		    	onClick={()=>this.setState({ isCreateBoardOpen: !this.state.isCreateBoardOpen })} />

		  </div>
		  {this.state.isCreateBoardOpen ? <CreateBoard /> : null }
		  {}
	  </div>
	);		
	}
}