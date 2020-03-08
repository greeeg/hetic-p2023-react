import React, { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [todo, setTodo] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    if (todo.length > 0) {
      onSubmit(todo);
      setTodo('');
    }
  };

  return (
    <header className="mb-8">
      <form className="flex mt-4" onSubmit={onFormSubmit}>
        <input
          className="shadow appearance-none w-full p-6 pl-8 pr-8 text-grey-darker mr-4"
          placeholder="Create an awesome side-project about dogs"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button className="shadow flex-no-shrink p-2 border-2 rounded bg-indigo text-white border-indigo hover:text-white hover:bg-indigo-light hover:border-indigo-light">
          Add Todo
        </button>
      </form>
    </header>
  );
};
