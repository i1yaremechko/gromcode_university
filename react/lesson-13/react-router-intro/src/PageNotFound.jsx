import React from 'react';
import { Link } from 'react-router-dom';
React.version;

const PageNotFound = () => {
  return (
    <div class="page__content">
      <h1>😢</h1>
      <Link to='/'>Go home</Link>
    </div>
  );
}

export default PageNotFound;