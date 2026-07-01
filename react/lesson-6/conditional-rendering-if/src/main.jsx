import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth.jsx';
import './index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <Auth />
  </React.Fragment>,
  rootElement
);