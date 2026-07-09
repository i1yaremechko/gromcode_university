import React, { useState } from 'react';
import Clock from './Clock';
React.version;

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState);
  };
  
  return (
    <>
      <button onClick={toggleVisibility}>Toggle</button>
      <div className="clocks-container">
        {visible && (
          <>
            <Clock location="New York" offset={-5} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="London" offset={0} />
          </>
        )}
      </div>
    </>
  );
}


export default App;