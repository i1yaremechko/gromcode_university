import React from 'react';
import Greeting from './Greeting';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
    let button;
    if (this.state.isLoggedIn) {
      button = <button onClick={this.handleLogout}>Logout</button>;
    } else {
      button = <button onClick={this.handleLogin}>Login</button>;
    }
    return (
      <React.Fragment>
        <div className='panel'>
          <Greeting isLoggedIn={this.state.isLoggedIn} />
          <div>{button}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Auth;