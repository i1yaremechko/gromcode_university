import React from 'react';
import ReactDOM from 'react-dom';
import GoodButton from './GoodButton.jsx';
import './index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <GoodButton />
  </React.Fragment>,
  rootElement
);