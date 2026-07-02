import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  handleLogin = () => {
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }
  
  render() {
    const { isLoggedIn, isProcessing } = this.state;

    if (isProcessing) {
      return <Spinner size={30} />
    }
    
    return isLoggedIn ? (
      <Logout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.handleLogin} />
    );
  }
}

export default Auth;