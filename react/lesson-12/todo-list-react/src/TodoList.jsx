import React from 'react';
import TasksList from './TasksList';
React.version;

const TodoList = () => {
  return (
    <>
      <h1 className='title'>Todo List</h1>
      <TasksList />
    </>
    
  );
};

export default TodoList;