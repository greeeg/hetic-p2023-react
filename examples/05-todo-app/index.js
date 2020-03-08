import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form';
import { Todo } from './Todo';

const LOCAL_STORAGE_KEY = 'hetic-h3-todos';

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const onNewTodo = text => {
    setTodos([
      ...todos,
      {
        text,
        completed: false
      }
    ]);
  };

  const onTodoToggle = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const remainingTodos = todos.filter(todo => todo.completed === false);

  useEffect(() => {
    document.title = `(${remainingTodos.length}) TODO App`;
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(remainingTodos)
    );
  }, [remainingTodos]);

  return (
    <main className="w-3/5 p-8 mx-auto">
      <h1 className="mb-8">TODO App</h1>

      <Form onSubmit={onNewTodo} />

      <section className="shadow">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} onToggle={() => onTodoToggle(index)} />
        ))}
      </section>

      <footer className="mt-8">
        <p className="text-grey-darkest">
          Remaining todos: {remainingTodos.length}
        </p>
      </footer>
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
