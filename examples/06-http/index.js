import React from 'react';
import ReactDOM from 'react-dom';

const Profile = props => {
  const { firstName, lastName, role } = props;

  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{role}</p>
    </div>
  );
};

const App = () => (
  <div>
    <Profile firstName="John" lastName="Doe" role="Software Engineer" />
    <Profile
      firstName="Michelle"
      lastName="Robert"
      role="Engineering Manager"
    />
    <Profile firstName="Dalton" lastName="Frank" role="Office Manager" />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
