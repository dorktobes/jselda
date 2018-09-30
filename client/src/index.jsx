import React from 'react';
import reactDOM from 'react-dom';

import Eagle from '../../class/Eagle';

import App from './components/App';

reactDOM.render(<App View={Eagle} />, document.querySelector('#app'));
