import React from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
    cartItems: [
      { id: '1', name: 'iPhone 11', price: 999 },
      { id: '2', name: 'iPad Pro', price: 799 },
    ],
  };

  handleUserChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData, cartItems } = this.state;
    const fullName = `${userData.firstName} ${userData.lastName}`;

    return (
      <div className="page">
        <h1 className="title">Hello, {userData.firstName} {userData.lastName}</h1>
        <main className="content">
          <ShoppingCart userName={fullName} cartItems={cartItems} />
          <Profile userData={userData} handleChange={this.handleUserChange} />
        </main>
      </div>
    );
  }
}

export default App;