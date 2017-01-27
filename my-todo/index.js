import {render} from 'react-dom';
import React from 'react';

import App from './App';

const def = {
  todos: [
    'bea',
    'mananca',
    'alearga',
  ]
}

render(
  <App init={def}/>,
  document.getElementById('root')
);
