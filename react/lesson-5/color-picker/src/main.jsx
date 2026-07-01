import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './ColorPicker.jsx';
import './index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <ColorPicker />
  </React.Fragment>,
  rootElement
);