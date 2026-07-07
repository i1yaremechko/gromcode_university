import React from 'react';
import ReactDOM from 'react-dom';
import Expand from './Expand';
import './index.scss';
React.version;

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div className="app">
    <Expand title="some title">
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
      </p>
    </Expand>
  </div>, 
  rootElement
);