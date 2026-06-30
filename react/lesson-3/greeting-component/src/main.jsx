import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <React.Fragment>
    <Greeting />
  </React.Fragment>, 
  rootElement
);