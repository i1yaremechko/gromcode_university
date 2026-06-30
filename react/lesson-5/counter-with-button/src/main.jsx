import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.jsx';
import './index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <Counter />
  </React.Fragment>,
  rootElement
);