import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <Mailbox unreadMessages={[]}/>
  </React.Fragment>,
  rootElement
);