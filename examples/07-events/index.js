import React from 'react';
import ReactDOM from 'react-dom';

const Toggle = ({ onClick, title }) => {
  return <button onClick={onClick}>{title}</button>;
};

const App = () => (
  <div>
    <Toggle title="Click me" onClick={() => alert('Clicked')} />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
