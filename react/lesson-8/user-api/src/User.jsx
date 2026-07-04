import React from 'react';

class User extends React.Component {
  state = {
    user: null,
  }

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to fetch user');
      })  
      .then((data) => {
        this.setState({
          user: data,
        })
      })
      .catch((error) => console.error(error));
  };

  render() {
    const { user } = this.state;
    if (!this.state.user) return null;
    const { avatar_url, name, location } = user;
    return (
      <div className='user'>
        <img 
          alt="User Avatar"
          src={avatar_url} 
          className='user__avatar' 
        />
        <div className='user__info'>
          <span className='user__name'>{name}</span>
          <span className='user__location'>{location}</span>
        </div>
      </div>
    );
  }
}

export default User;