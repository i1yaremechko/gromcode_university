import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
    return (
      <React.Fragment>
        <Counter start={5} interval={1000} />
        <Counter start={12} interval={2000} />
        <Counter start={-21} interval={3000} />
      </React.Fragment>
    );
  
};

export default App;