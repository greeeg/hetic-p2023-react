import React from 'react';
import ReactLogo from '../static/react-logo.png';

export const Logo = () => (
  <p
    style={{
      marginLeft: 14,
      marginTop: 40,
      display: 'flex',
      flexDirection: 'row'
    }}
  >
    <img
      src={ReactLogo}
      img="React.js"
      style={{ width: 80, height: 'auto', marginRight: 0 }}
    />

    <div>
      <span
        style={{
          display: 'block',
          fontSize: 24,
          fontWeight: '500',
          marginBottom: 4
        }}
      >
        {' '}
        Introduction à React.js
      </span>
      <span style={{ display: 'block', fontSize: 16 }}>@hetic - P2023</span>
    </div>
  </p>
);
