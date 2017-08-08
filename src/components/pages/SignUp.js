import React, {Component} from 'react';
import './SignUp.css';

const ENTER = 13;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'', 
      error:''
    };
  }

  _handleSignup = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let { email: {value: email}, password: {value: password} } = this.refs;
    this.setState({
            email: email,
            password: password, 

          });
    if (email && password && password.length >= 8) {
      this.props.router.push('/login')
      // .catch(console.error)
    }
    else {
      this.setState({ error: "Please enter a valid email and password"})
    }
  }
  
  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      console.log(this.state.error)
      this.setState({ error: null })
    }
    if (e.keyCode===ENTER) {
      this._handleSignup()
    }
  }

  render() {
    return (
      <div className="signup">
        <h1>Signup to Dashboardly</h1>
        
        <input type="email" 
        ref="email" 
        placeholder="email"
          onKeyUp={this._handleTyping}
        />

        <input type="password" 
        ref="password"
        placeholder="password"
          onKeyUp={this._handleTyping}
        />
        <button onClick={this._handleLogin}>signup!</button>
        <p>{this.state.error}</p>
      </div>
    );
  }

}
