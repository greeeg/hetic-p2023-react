import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ARTICLE_CONTENT_ENDPOINT } from '../config';

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
    <div>
      <h1>{title}</h1>

      <a href={`https://en.wikipedia.org/wiki/${title}`} target="_blank">
        Link
      </a>

      {post && <div>{post.extract}</div>}
    </div>
  );
};
