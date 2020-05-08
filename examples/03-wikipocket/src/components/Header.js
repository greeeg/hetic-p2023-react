import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px 32px;
  margin: 0 auto;
  margin-top: 32px;
`;

const Logo = styled(Link)`
  display: inline-block;
  font-size: 96px;
  font-weight: 900;
  color: #232423;
  text-decoration: underline;
  margin-bottom: 8px;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    li:not(:last-child) {
      margin-right: 16px;
    }
  }

  a {
    color: #232423;
    font-weight: bold;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      border-bottom: 3px solid #232423;
    }
  }
`;

export const Header = () => (
  <Container>
    <Logo to="/">Wikipocket</Logo>

    <Navigation>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </Navigation>
  </Container>
);
