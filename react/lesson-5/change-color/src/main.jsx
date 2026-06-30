import React from 'react';
import ReactDOM from 'react-dom';
import Colors from './Colors.jsx';
import './index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <Colors />
  </React.Fragment>,
  rootElement
);