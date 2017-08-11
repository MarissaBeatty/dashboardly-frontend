import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './modals/Menu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isMenuOpen: false }
  }
  
  closeMenu = () => this.setState({ isMenuOpen: false })
  
  render() {
    let {isMenuOpen} = this.state
    return (
      <div className="App">
        <div className="inner">  
          <div className="title-wrapper">
            <Link to="/" className="App-navbar__title">Dashboardly</Link>
          </div>
          <div className="App-navbar">
            
            <i className="fa fa-bars fa-2x menu-icon"
              onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
            />
            <div className="config">
              <i className="fa fa-cog fa-2x settings-icon"/>
            </div>         
          </div>

          <Menu show={isMenuOpen} closeMenu={this.closeMenu}/>

          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
