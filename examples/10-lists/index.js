import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const contacts = [
  {
    name: 'Lise James',
    phone: '06 01 02 03 04'
  },
  {
    name: 'Lise James',
    phone: '06 01 02 03 04'
  },
  {
    name: 'Lise James',
    phone: '06 01 02 03 04'
  },
  {
    name: 'Lise James',
    phone: '06 01 02 03 04'
  },
  {
    name: 'Lise James',
    phone: '06 01 02 03 04'
  }
];

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <h3>{contact.name}</h3>
          <p>{contact.phone}</p>
        </li>
      ))}
    </ul>
  );
};

const App = () => (
  <div>
    <ContactList contacts={contacts} />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
