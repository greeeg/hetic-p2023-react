import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ThreadButton = ({ reversed, onClick, active }) => (
  <button
    className={`thread__button ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512.171 512.171"
      className={`thread__button-icon ${
        reversed ? 'thread__button-icon--reversed' : ''
      }`}
    >
      <g>
        <path
          d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971
			c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627
			l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504
			C479.793,292.501,480.71,287.915,479.046,283.925z"
        />
      </g>
    </svg>
  </button>
);

const Thread = ({ count, author, authorPoints, title, description }) => {
  const [userVote, setUserVote] = useState(0);

  const onButtonClick = action => {
    // Reset user vote if action equals existing user vote
    if (userVote === action) {
      setUserVote(0);
    } else {
      setUserVote(action);
    }
  };

  return (
    <li className="thread">
      <div className="thread__actions">
        <ThreadButton
          reversed={true}
          active={userVote === 1}
          onClick={() => onButtonClick(1)}
        ></ThreadButton>

        <span className="thread__upvotes-count">{count + userVote}</span>

        <ThreadButton
          reversed={false}
          active={userVote === -1}
          onClick={() => onButtonClick(-1)}
        ></ThreadButton>
      </div>

      <div className="thread__content">
        <span className="thread__author">
          {author} <b className="thread__author-stats">{authorPoints} points</b>
        </span>
        <h3 className="thread__title">{title}</h3>
        <p className="thread__body">{description}</p>
      </div>
    </li>
  );
};

const App = () => (
  <main>
    <ul className="threads">
      <Thread
        count={260}
        author="TheRealReapz"
        authorPoints="14.5k"
        title="What do you wish you had in high school that kids have today?"
        description="MP3 players/Spotify and the like. I had to carry around my discman on my long walk home from school, even with antiskip it would still buffer every now and then. Don't get me started on batteries too. Nowadays it's so easy to listen to anything at any time, back then it wasn't."
      />
    </ul>
  </main>
);

ReactDOM.render(<App />, document.querySelector('#root'));
