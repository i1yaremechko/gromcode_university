import React from 'react';
import UsersList from './UsersList';
React.version;

const users = [
  { id: '1', name: 'Tad', age: 18 },
  { id: '2', name: 'Anna', age: 45 },
  { id: '3', name: 'John', age: 30 },
  { id: '4', name: 'Ben', age: 22 },
  { id: '5', name: 'Amely', age: 25 },
];

const App = () => {
  return <UsersList users={users} />
};

export default App;