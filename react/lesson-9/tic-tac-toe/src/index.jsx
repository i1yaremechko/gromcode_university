import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game.jsx';
import './index.scss';
React.version;

const rootElement = document.getElementById('root');

ReactDOM.render(<Game />, rootElement);