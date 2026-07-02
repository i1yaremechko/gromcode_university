import React from 'react';
import Info from './Info';
React.version;

const iPhone13 = 'iPhone 13 - Price is 500$. Available in 2 colors';
const iPhone13Pro = 'iPhone 13 Pro - Price is 650$. Not available';

class Page extends React.Component {
  state = {
    info: null,
  }

  setInfo = info => {
    this.setState({ info});
  };

  render() {
    return (
      <div className='page'>
        <Info info={this.state.info} />
        <div className='actions'>
          <button className='btn' onClick={() => this.setInfo(iPhone13)}>IPhone 13</button>
          <button className='btn' onClick={() => this.setInfo(iPhone13Pro)}>IPhone 13 Pro</button>
          <button className='btn' onClick={() => this.setInfo('')}>Clear</button>
        </div>
      </div>
    );
  }
}

export default Page;