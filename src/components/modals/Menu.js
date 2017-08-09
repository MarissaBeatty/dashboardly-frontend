import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import { Link } from 'react-router';
import onClickOutside from 'react-onclickoutside';
import auth from '../../auth';
import './Menu.css';
import {browserHistory as history} from 'react-router';
import api from '../../api.js';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: ""
    };
    this._handleLogout = this._handleLogout.bind(this);
  }

  componentDidMount() {
    this._fetchAvatar();
  }
  

  _fetchAvatar = () => {
    api.getAvatar(auth.getToken())
    .then(res => {
      // console.log(res, "this is the avatar url")
      this.setState({ avatarUrl: res.body.avatarUrl })
    })
    .catch(console.error)

  }

  handleClickOutside = () => {
    this.props.closeMenu();
  }

  _handleLogout (e) {
    //console.log("Working");
    e.preventDefault();
    auth.logout();
    this.props.closeMenu();
    
    history.push('/login');
  }

  render() {
    // console.log(auth.avatarUrl)
    let { avatarUrl } = this.state
    let { closeMenu, show } = this.props
    console.log(this.state)
    const isLoggedIn = auth.isLoggedIn()
    return (
      <div className={`menu ${show?"show":""}`}>

        <div className="menu__header">
        {isLoggedIn ? 
            <img src={avatarUrl} alt="profile-pic" className="menu__avatar"/> : null }
        </div>

        

        <div className="menu__list">

          <Link to="/" className="menu__item" onClick={closeMenu}>
            Home
          </Link>

          {!isLoggedIn ?
            <Link to="/login" className="menu__item" onClick={closeMenu}>
              Login
            </Link>
          : null}

          {!isLoggedIn ?
            <Link to="/signup" className="menu__item" onClick={closeMenu}>
              Signup
            </Link>
          : null}

          {isLoggedIn ?
            <button onClick={this._handleLogout}>logout</button>
            : null}
        </div>

      </div>
    );
  }

}

export default onClickOutside(Menu);