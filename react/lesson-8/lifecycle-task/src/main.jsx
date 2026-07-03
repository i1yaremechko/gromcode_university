import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo.jsx';
import './index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <Demo />
  </React.Fragment>,
  rootElement
);