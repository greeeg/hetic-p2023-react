import React from 'react';

export const FootNote = ({ children }) => (
  <p
    style={{
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      lineHeight: 1.4,
      maxWidth: 800
    }}
  >
    {children}
  </p>
);
