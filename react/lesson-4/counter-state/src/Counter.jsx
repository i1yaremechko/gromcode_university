import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start,
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, props.interval);
  }

  render() {
    return (
      <React.Fragment>
        <div className='counter'>{this.state.counter}</div>
      </React.Fragment>
    );
  }
}

export default Counter;