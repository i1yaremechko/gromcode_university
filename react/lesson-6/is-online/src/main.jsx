import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Status from './Status.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <Status isOnline/>
  </React.Fragment>,
  rootElement
);