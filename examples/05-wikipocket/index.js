import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getRandomArticle } from './getRandomArticle';

const LOCAL_STORAGE_KEY = 'hetic-h3-pocket';

const getSavedArticlesFromStorage = () => {
  const articles = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  return articles;
};

const updateSavedArticlesFromStorage = savedArticles => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedArticles));
};

const App = () => {
  const [randomArticle, setRandomArticle] = useState(null);
  const [savedArticles, setSavedArticles] = useState(
    getSavedArticlesFromStorage()
  );

  const reloadRandomArticle = () => {
    setRandomArticle(null);
    getRandomArticle().then(article => setRandomArticle(article));
  };

  // When first loading the app
  useEffect(() => {
    reloadRandomArticle();
  }, []);

  // Save into local storage
  useEffect(() => {
    updateSavedArticlesFromStorage(savedArticles);
  }, [savedArticles]);

  const onNext = () => {
    reloadRandomArticle();
  };

  const onSave = () => {
    setSavedArticles([...savedArticles, randomArticle]);
    reloadRandomArticle();
  };

  return (
    <main className="w-3/5 p-8 mx-auto">
      <h1 className="mb-8">WikiPocket</h1>

      {randomArticle && (
        <article className="shadow flex items-center bg-grey-lightest p-8 mb-8">
          <div className="flex flex-col flex-1">
            <span className="text-grey-darkest text-xl mb-2">
              {randomArticle.title}
            </span>
            <span className="mr-2 text-grey-dark">
              {randomArticle.extract.slice(0, 120)}...
            </span>
          </div>

          <button
            onClick={onSave}
            className="shadow p-2 mr-2 rounded bg-indigo text-white hover:text-white hover:bg-indigo-light"
          >
            Save
          </button>

          <button
            onClick={onNext}
            className="shadow p-2 rounded bg-red text-white hover:text-white hover:bg-red-light"
          >
            Next
          </button>
        </article>
      )}

      {savedArticles.map(savedArticle => (
        <article className="shadow flex items-center bg-grey-lightest p-8 mb-4">
          <div className="flex flex-col flex-1">
            <span className="text-grey-darkest text-xl mb-2">
              {savedArticle.title}
            </span>
            <a
              href={`https://en.wikipedia.org/wiki/${savedArticle.title}`}
              target="_blank"
              className="text-indigo no-underline hover:underline"
            >
              Read article
            </a>
          </div>
        </article>
      ))}
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
