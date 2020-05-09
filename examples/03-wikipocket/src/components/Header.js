import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  display: inline-block;
  padding: 0px 32px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Logo = styled(Link)`
  font-size: 96px;
  font-weight: 900;
  text-decoration: underline;

  @media screen and (max-width: 800px) {
    font-size: 42px;
  }
`;

const Navigation = styled.nav`
  display: inline-block;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    li:not(:last-child) {
      margin-right: 16px;
    }
  }

  a {
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
    <Inner>
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
    </Inner>
  </Container>
);
