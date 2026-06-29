const rootElement = document.querySelector('#root');

const renderGreeting = React.createElement(
  'div',
  { className: 'greeting' },
  [
    React.createElement(
    'h1',
    { className: 'greeting__title', key: 'title' },
    'Hello, world!'
  ),
  React.createElement(
    'p',
    { className: 'greeting__text', key: 'text' },
    `I'm learning React`
  ),
  ]
);

ReactDOM.render(renderGreeting, rootElement);
