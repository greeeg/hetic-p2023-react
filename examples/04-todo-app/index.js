import React from 'react';
import ReactDOM from 'react-dom';

const Profile = () => {
  const firstName = 'John';
  const lastName = 'Doe';
  const role = 'Software Engineer';

  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{role}</p>
    </div>
  );
};

ReactDOM.render(<Profile />, document.querySelector('#root'));
