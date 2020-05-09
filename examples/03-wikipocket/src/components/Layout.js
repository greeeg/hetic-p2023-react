import React from 'react';
import styled from 'styled-components';

export const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-top: 100px;
  background-color: ${(p) => (p.theme === 'dark' ? '#080909' : '#f4f0ec')};

  h1,
  h2,
  h3,
  p,
  span,
  a {
    color: ${(p) => (p.theme === 'dark' ? '#fafafa' : '#121314')};
  }
`;
