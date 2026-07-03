import React from 'react';
import Clock from './Clock';
React.version;

class App extends React.Component {
  state = {
    visible: true,
  };

  toggleVisibility = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };
  
  render() {
    return (
      <>
        <button onClick={this.toggleVisibility}>Toggle</button>
        <div className="clocks-container">
          {this.state.visible && (
            <React.Fragment>
              <Clock location="New York" offset={-5} />
              <Clock location="Kyiv" offset={2} />
              <Clock location="London" offset={0} />
            </React.Fragment>
          )}
        </div>
      </>
    );
  }
}

export default App;