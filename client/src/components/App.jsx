import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MiniMap from './MiniMap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      View: new props.View(),
    };
  }

  render() {
    return (
      <div>
        <MiniMap playerLocation={this.state.View.playerLocation} layout={this.state.View.layout} />
      </div>
    );
  }
}

App.propTypes = {
  View: PropTypes.func.isRequired,
};

export default App;
