import React from 'react';

export const FootNote = ({ children }) => (
  <p
    style={{
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)'
    }}
  >
    {children}
  </p>
);
