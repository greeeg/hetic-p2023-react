import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { ARTICLE_CONTENT_ENDPOINT } from '../config';

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 32px;
  padding-bottom: 200px;
`;

const Title = styled.h1`
  display: inline-block;
  font-size: 24px;
  font-weight: 900;
  padding-right: 8px;
  margin-bottom: 12px;
`;

const Link = styled.a`
  display: inline-block;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Content = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  line-height: 1.5;
`;

export const Article = () => {
  const { title } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${ARTICLE_CONTENT_ENDPOINT}${title}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.query.pages[0]);
      });
  }, []);

  return (
    <Container>
      <Title>{title}</Title>

      <Link href={`https://en.wikipedia.org/wiki/${title}`} target="_blank">
        Link
      </Link>

      {post && <Content>{post.extract}</Content>}
    </Container>
  );
};
