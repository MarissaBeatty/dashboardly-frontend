import React, {Component} from 'react';
import CreateBoard from '../modals/CreateBoard';
// import Home from '../pages/Home';


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
        let {isCreateBoardOpen} = this.state
        // console.log(this.state)
    return (
    	<div>
		  <div className="add-button">
		    <i className="fa fa-plus fa-2x" 
		    	onClick={()=>this.setState({ isCreateBoardOpen: true })} />

		  </div>
		  {this.state.isCreateBoardOpen ? <CreateBoard /> : null }
	  </div>
	);		
	}
}