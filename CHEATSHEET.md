<p align="center"><img src="https://github.com/greeeg/hetic-p2023-react/blob/master/assets/react-logo.png" width="220" /></p>

# React.js CheatSheet

> Concepts clés et exemples concrets avec [React.js](http://reactjs.org/)

## Table des matières

- Elements & JSX
- Application & Composants

## Elements & JSX

```jsx
/*
 * En résumé, le JSX permet d'écrire du HTML
 * en Javascript. Il ne peut utiliser que des tags
 * HTML valides (eg. div, h1, p, a, form)
 */
<div>Hello World React.js</div>
```

### Le JSX reste du Javascript

```jsx
/*
 * Comme toute autre expression Javascript,
 * on peut stocker du JSX dans une variable
 */
const greeting = <div>Hello World React.js</div>;

/*
 * On peut également utiliser des
 * expressions au sein même du JSX
 */
const name = 'Greg';
const customGreeting = <div>Hello World {name.toUpperCase()}</div>;
```

### Il permet de `nester` des éléments

```jsx
/*
 * On écrit des expressions qui contiennent
 * des éléments nestés de cette manière.
 * On parle d'éléments parents & enfants
 */
const greeting = (
  <div>
    <h1>Hello!</h1>
    <p>Welcome to React</p>
  </div>
);
```

### Sa syntaxe est cependant quelque peu différente

```jsx
// On écrit les éléments vides de cette manière
<div />

// Les balises autofermantes s'écrivent forcément comme cela
<input name="email" />

// Les attributs s'écrivent en camelCase, On part de `className` plutôt que `class`
<button className="submit-button">Submit</button>
```

## Application & Composants

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const greeting = <h1>Hello React</h1>;

/*
 * ReactDOM permet de rendre l'arbre de composants
 * React dans une page web. Le premier paramètre de
 * la méthode `render` est le composant/élément à rendre.
 * Le deuxième est l'élément du DOM où le rendre
 */
ReactDOM.render(greeting, document.getElementById('root'));
```

### Les composants, briques d'interface

```jsx
/*
 * Un composant est une fonction qui
 * retourne un arbre d'éléments
 */
const Header = () => {
  return (
    <header>
      <a href="/" title="Website">
        <img src="assets/logo.png" alt="Website logo" />
      </a>
    </header>
  );
};
```

### On les utilise de cette manière

```jsx
const Header = () => {
  return (
    <header>
      <a href="/" title="Website">
        <img src="assets/logo.png" alt="Website logo" />
      </a>
    </header>
  );
};

/*
 * On utilise un composant comme une balise
 * HTML avec le nom de la fonction qui le définie
 */
const app = (
  <div>
    <Header />

    <main>
      <h1>Title</h1>
    </main>
  </div>
);
```

### On peut les réutiliser à plusieurs endroits

```jsx
function IndexPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <Header />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
```
