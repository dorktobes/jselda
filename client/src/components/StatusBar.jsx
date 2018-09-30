import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatusBar extends Component {
  
  render() {
    return (
      <div className="status-bar">
        {...this.props.children}
      </div>
    );
  }
}

StatusBar.propTypes = {
  
};

export default StatusBar;
