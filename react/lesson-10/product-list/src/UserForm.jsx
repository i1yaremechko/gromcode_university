import React from 'react';
React.version;

const UserForm = ({ userData, handleChange }) => {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form_input"
        value={userData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form_input"
        value={userData.lastName}
        onChange={handleChange}
      />
    </form>
  );
};

export default UserForm;