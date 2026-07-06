import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.scss';
React.version;

const rootElement = document.getElementById('root');

ReactDOM.render(<App userId="github" />, rootElement);