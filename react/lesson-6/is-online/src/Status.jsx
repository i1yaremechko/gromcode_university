import React from 'react';
import Offline from './Offline';
import Online from './Online';
React.version;

const Status = (props) => {
  if (props.isOnline) {
    return <Online />;
  }
  return <Offline />;
};

export default Status;