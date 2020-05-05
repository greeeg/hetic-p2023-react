import React from 'react';
import { useDeck } from 'mdx-deck';
import { theme, YELLOW } from '../theme';

export const Link = ({ step, children }) => {
  const { setIndex } = useDeck();

  return (
    <button
      onClick={() => setIndex(step)}
      style={{
        ...theme.styles.h3,
        WebkitAppearance: 'none',
        background: 'none',
        border: 'none',
        color: YELLOW,
        cursor: 'pointer',
        outline: 'none',
        marginBottom: 12
      }}
    >
      {children}
    </button>
  );
};
