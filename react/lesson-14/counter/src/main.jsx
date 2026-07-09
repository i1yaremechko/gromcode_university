import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.jsx';
import './index.scss';
React.version;

const rootElement = document.getElementById('root');

ReactDOM.render(<Counter />, rootElement);