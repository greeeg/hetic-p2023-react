import React from 'react';
import ReactDOM from 'react-dom';

const Acordion = ({ question, answer, isOpen }) => {
  return (
    <section>
      <h3>{question}</h3>
      {isOpen && <p>{answer}</p>}
    </section>
  );
};

const App = () => (
  <div>
    <Acordion
      question="Do you offer a student plan?"
      answer="Of course we do."
      isOpen={false}
    />
    <Acordion
      question="Do you offer a student plan?"
      answer="Of course we do."
      isOpen={true}
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
