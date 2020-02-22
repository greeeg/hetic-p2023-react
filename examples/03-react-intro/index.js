import React from 'react';
import { render } from 'react-dom';

const App = React.createElement('div', {}, 'Hello World');

render(App, document.querySelector('#root'));
