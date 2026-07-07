import PropTypes from 'prop-types';
import React from 'react';
React.version;

const Expand = ({ title, children, isOpen, onToggle }) => {
  const iconClass = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggle}>
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

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  title: '',
  isOpen: false,
};

export default Expand;