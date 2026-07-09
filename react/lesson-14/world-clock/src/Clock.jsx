import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + utcOffset + offset));
};

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(
    getTimeWithOffset(offset).toLocaleTimeString('en-US')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeWithOffset(offset).toLocaleTimeString('en-US'));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [offset]);

  return (
    <div className='clock'>
      <div className='clock__location'>{location}</div>
      <div className='clock__time'>{time}</div>
    </div>
  );
};

Clock.propTypes = {
  location: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
};

export default Clock;