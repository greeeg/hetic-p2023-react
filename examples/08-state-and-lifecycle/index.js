import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Notifications = ({ defaultCount }) => {
  const [currentCount, setCurrentCount] = useState(0);

  const onClick = () => {
    setCurrentCount(currentCount + 1);
  };

  useEffect(() => {
    document.title = `(${defaultCount + currentCount}) Twitter`;
  }, [defaultCount, currentCount]);

  return (
    <div>
      <button onClick={onClick}>Add notification</button>
      <p>Notifications count: {defaultCount + currentCount}</p>
    </div>
  );
};

const App = () => (
  <div>
    <Notifications defaultCount={3} />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
