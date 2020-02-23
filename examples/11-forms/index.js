import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const UserInput = ({ id, label, isValid: isValidFunction }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const onChange = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setIsValid(isValidFunction(value));
  }, [value]);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} onChange={onChange} />
    </div>
  );
};

const App = () => (
  <div>
    <UserInput
      id="firstname"
      label="Firstname"
      isValid={value => value.length > 0}
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
