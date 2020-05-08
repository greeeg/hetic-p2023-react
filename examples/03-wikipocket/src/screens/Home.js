import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RANDOM_ARTICLES_ENDPOINT } from '../config';

const Container = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InnerContainer = styled.div`
  max-width: 600px;
  text-align: right;

  a {
    margin: 16px 0px 16px 16px;
    line-height: 1.6;
    font-size: 18px;
    color: #111111;
    font-weight: bold;
  }
`;

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(RANDOM_ARTICLES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setPosts(Object.entries(data.query.pages));
      });
  }, []);

  return (
    <Container>
      <InnerContainer>
        {posts.map((page) => (
          <Link to={`/random/${encodeURIComponent(page[1].title)}`}>
            {page[1].title}
          </Link>
        ))}
      </InnerContainer>
    </Container>
  );
};
