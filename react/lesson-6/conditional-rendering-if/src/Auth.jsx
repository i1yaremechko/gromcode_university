import React from 'react';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }
  
  render() {
    const greetingText = this.state.isLoggedIn 
      ? 'Hello, user 😎' 
      : 'Hi stranger. Please login 🚀';

    return (
      <React.Fragment>
        <div className='panel'>
          <h1>{greetingText}</h1>
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.handleLogout} />
          ) : (
            <Login onLogin={this.handleLogin} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Auth;