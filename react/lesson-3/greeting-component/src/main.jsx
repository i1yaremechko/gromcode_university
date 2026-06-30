import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <React.Fragment>
    <Greeting 
      firstName="John" 
      lastName="Doe" 
      birthDate={new Date(2006, 7, 1)}
    />
  </React.Fragment>, 
  rootElement
);