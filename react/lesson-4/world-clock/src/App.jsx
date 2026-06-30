import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <React.Fragment>
      <Clock location="New York" offset={-5} />
      <Clock location="Kyiv" offset={2} />
      <Clock location="London" offset={0} />
    </React.Fragment>
  );
};

export default App;