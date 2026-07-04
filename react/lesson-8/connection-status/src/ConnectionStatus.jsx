import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    isOnline: true,
  }

  componentDidMount() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  handleOnline = () => {
    this.setState({ isOnline: true });
  };

  handleOffline = () => {
    this.setState({ isOnline: false });
  };

  render() {
    const { isOnline } = this.state;

    const statusClass = isOnline ? 'status' : 'status status_offline';
    const statusText = isOnline ? 'online' : 'offline';

    return (
      <div className={statusClass}>{statusText}</div>
    );
  }
}

export default ConnectionStatus;