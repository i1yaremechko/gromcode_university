import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Toggler from './Toggler.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <Toggler />
  </React.Fragment>,
  rootElement
);