import React from 'react';

const Greeting = (props) => {
  const today = new Date();
  const birth = new Date(props.birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  const month = today.getMonth() - birth.getMonth();
  if (month < 0) age--;
  
  return (
    <React.Fragment>
      <div className="greeting">
        My name is {props.firstName} {props.lastName}. I am {age} years old
      </div>
    </React.Fragment>
  );
};

export default Greeting;