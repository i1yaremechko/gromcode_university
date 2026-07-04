import React from 'react';
import ReactDOM from 'react-dom';
import ConnectionStatus from './ConnectionStatus.jsx';
import './index.scss';
React.version;

const rootElement = document.getElementById('root');

ReactDOM.render(<ConnectionStatus />, rootElement);