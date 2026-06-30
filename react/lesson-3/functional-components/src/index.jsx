import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <React.Fragment>
    <Search name="Tom" />
  </React.Fragment>, 
  rootElement
);