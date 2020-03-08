import React from 'react';

export const Todo = ({ todo, onToggle }) => (
  <article className="border-b" onClick={onToggle}>
    <div className="border-l-2 bg-grey-lightest border-transparent flex justify-between items-center p-6 pl-8 pr-8 cursor-pointer">
      <span className="text-grey-darkest font-thin text-xl">{todo.text}</span>
      <div
        className={`rounded-full border border-grey w-7 h-7 flex items-center justify-center ${
          todo.completed ? 'bg-indigo' : ''
        }`}
      >
        <svg
          fill="none"
          height="24"
          stroke={todo.completed ? 'white' : '#606F7B'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  </article>
);
