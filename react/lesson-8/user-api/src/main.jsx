import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import User from './User';
React.version;

const rootElement = document.getElementById('root');

ReactDOM.render(<User userId='facebook' />, rootElement);