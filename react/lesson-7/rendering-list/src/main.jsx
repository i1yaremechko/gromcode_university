import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList.jsx';

const rootElement = document.getElementById('root');
const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <React.Fragment>
    <NumbersList numbers={numbers}/>
  </React.Fragment>,
  rootElement
);