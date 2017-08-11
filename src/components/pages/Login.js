import React, {Component} from 'react';
import auth from '../../auth'
import './Login.css';

const ENTER = 13;

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.refs.email
    };
  }
  
  _handleLogin = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let { email: {value: email}, password: {value: password} } = this.refs;
    if (email && password) {
      auth.login(email, password)
      .then(console.log(email))
      .then(this.setState({email: email}))
      .then(console.log(this.state, "state after setState email"))
      .then(res => this.props.router.push('/'))
      .catch(console.error)
    }
    else {
      this.setState({ error: "Please enter an email and password"})
    }
  }
  
  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null })
    }
    if (e.keyCode===ENTER) {
      this._handleLogin();
    }
  }

  render() {
    // console.log(this.state.email, "state in login")
    // var email = this.state.email

    // console.log(email, "email");
    return (
      <div className="login">
        <input type="text" ref="email"
          onKeyUp={this._handleTyping}
        />
        <input type="password" ref="password"
          onKeyUp={this._handleTyping}
        />

        <button onClick={this._handleLogin}>login</button>
      </div>
    );
  }

}
