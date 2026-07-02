import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Page from './Page.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <Page />
  </React.Fragment>,
  rootElement
);