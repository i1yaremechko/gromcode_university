import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  toggleExpand = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="app">
        <Expand 
          title="some title" 
          isOpen={isOpen} 
          onToggle={this.toggleExpand}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;