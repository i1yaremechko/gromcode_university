import React from 'react';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + utcOffset + offset));
}

class Clock extends React.Component {
  state = {
    time: getTimeWithOffset(this.props.offset).toLocaleTimeString('en-US'),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: getTimeWithOffset(this.props.offset).toLocaleTimeString('en-US'),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='clock'>
        <div className='clock__location'>{this.props.location}</div>
        <div className='clock__time'>{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;