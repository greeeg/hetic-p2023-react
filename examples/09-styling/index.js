import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Card = ({ title, content }) => {
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <p
        className="card__content"
        style={{ color: content.length > 40 ? 'red' : 'blue' }}
      >
        {content}
      </p>
    </article>
  );
};

const App = () => (
  <div>
    <Card
      title="This is a blog article"
      content="Lorem ipsum dolor arte sit amet"
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
