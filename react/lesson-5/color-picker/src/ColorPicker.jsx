import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorTitle: '',
    };
  }
  
  setColorTitle(colorName) {
    this.setState({
      colorTitle: colorName,
    });
  }

  clearColorTitle() {
    this.setState({
      colorTitle: '',
    });
  }
  
  render() {
    return (
      <React.Fragment>
        <div>
          <div className='picker__title'>{this.state.colorTitle}</div>
          <div>
            <button
              className='picker__button picker__button_coral'
              onMouseEnter={() => this.setColorTitle('Coral')}
              onMouseLeave={() => this.clearColorTitle()}
            ></button>
            <button
              className='picker__button picker__button_aqua'
              onMouseEnter={() => this.setColorTitle('Aqua')}
              onMouseLeave={() => this.clearColorTitle()}
            ></button>
            <button
              className='picker__button picker__button_bisque'
              onMouseEnter={() => this.setColorTitle('Bisque')}
              onMouseLeave={() => this.clearColorTitle()}
            ></button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ColorPicker;