import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
    this.setStatus = this.setStatus.bind(this);
  }

  setStatus() {
    this.setState((prevState) => ({
      status: prevState.status === 'Off' ? 'On' : 'Off',
    }));
  }

  render() {
    return (
      <React.Fragment>
        <button className='toggler' onClick={this.setStatus}>
          {this.state.status}
        </button>
      </React.Fragment>
    );
  }
}

export default Toggler;