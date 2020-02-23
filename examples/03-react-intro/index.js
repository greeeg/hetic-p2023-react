import React from 'react';
import ReactDOM from 'react-dom';

// Creating an HTML element in Vanilla JS
const element = document.createElement('p');
element.innerHTML = 'Hello World';
element.classList.add('paragraph');
document.querySelector('#root').appendChild(element);

// Creating an element in React.js
// const element = React.createElement('div', {}, 'Hello World');
// ReactDOM.render(element, document.querySelector('#root'));
