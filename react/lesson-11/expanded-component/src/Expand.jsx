import PropTypes from 'prop-types';
import React from 'react';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  toggleExpand = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;

    const iconClass = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleExpand}>
            <i className={iconClass}></i>
          </button>
        </div>
        {isOpen && (
          <div className="expand__content">
            {children}
          </div>
        )}
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;