import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from "./UserGreeting";

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <React.Fragment>
        <UserGreeting />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <GuestGreeting />
    </React.Fragment>
  );
};

export default Greeting;