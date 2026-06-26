import React from "react";
import { createRoot } from 'react-dom/client';
const rootElement = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

createRoot(rootElement).render(greetingElem);