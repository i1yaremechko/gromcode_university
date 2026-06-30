import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <React.Fragment>
    <Comment />
  </React.Fragment>, 
  rootElement
);