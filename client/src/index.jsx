import React, { Component } from 'react';
import reactDOM from 'react-dom';

import Eagle from '../../class/Eagle';

window.Eagle = Eagle;

import App from './components/App';

reactDOM.render(<App View={Eagle} />, document.querySelector('#app'));
