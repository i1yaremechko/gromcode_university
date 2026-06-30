import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Profile from './Profile.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <React.Fragment>
    <Profile />
  </React.Fragment>, 
  rootElement
);