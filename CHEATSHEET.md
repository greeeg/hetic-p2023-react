<p align="center"><img src="https://github.com/greeeg/hetic-p2023-react/blob/master/assets/react-logo.png" width="220" /></p>

# React.js CheatSheet

> Concepts clés et exemples concrets avec [React.js](http://reactjs.org/)

## Table des matières

- [Elements & JSX](#elements--jsx)
- [Application & Composants](#application--composants)
- [Les évènements](#les-évènements)
- [Le state](#le-state)
- [Le cycle de vie](#le-cycle-de-vie)
- [Les listes](#les-listes)
- [Les formulaires](#les-formulaires)

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

### On leur passe des données dynamiques avec les `props`

```jsx
const username = "Jane Doe";

/*
 * On utilise les `props` en tant qu'objet
 * contenant l'ensemble des attributs passés
 */
const Profile = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.position}</p>
    </div>
  )
}

const app = (
  /*
   * On ajoute des attributs personnalisés que l'on appelle des `props`.
   * Elles peuvent être n'importe quelle expression JS valide.
   */
  <Profile name={username} position="Software Engineer">
)
```

### Elles ne peuvent pas être ré-affectées

```jsx
const Profile = props => {
  // Ceci n'est pas possible
  props.name = 'John';

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.position}</p>
    </div>
  );
};
```

### La prop `children` permet de passer des éléments/composants en tant qu'enfant d'un composant

```jsx
const BlogArticle = props => {
  return (
    <article>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </article>
  );
};

const app = (
  <BlogArticle title="Welcome to my first blog post">
    <p>First, I would like to say hello.</p>
  </BlogArticle>
);
```

### Le rendu conditionnel permet de choisir quoi afficher en fonction de certaines conditions

```jsx
const Header = () => {
  const isLoggedIn = checkLogIn();

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <a href="/my-account" title="My account">
            My account
          </a>
        ) : (
          <a href="/login" title="Log in">
            Log in
          </a>
        )}
      </nav>
    </div>
  );
};
```

## Les évènements

### Les évènements en React sont quelque peu différents de ceux en HTML

```jsx
// Ceci est la fonction appelée lorsque l'évènement est déclenché
function submitForm() {
  // Code pour soumettre le formulaire
}

// En HTML, onclick est en minuscule
<button onclick="submitForm()">
  Submit
</button>

// En JSX, onClick est en camelCase, comme les `props`
<button onClick={submitForm}>
  Submit
</button>
```

## Le state

### Le state permet de stocker des données localement dans un composant

```jsx
import React, { useState } from 'react';

const LearningApp = () => {
  const [language] = useState('javascript');

  return <div>I am learning {language}</div>;
};
```

### Il fournit également une fonction pour mettre à jour la valeur qu'il crée

```jsx
const LearningApp = () => {
  // La fonction `setter` est toujours en seconde position
  const [language, setLanguage] = React.useState('python');
  // On l'appelle généralement de cette manière `setStateVariable`

  return (
    <div>
      <button onClick={() => setLanguage('javascript')}>
        Change language to JS
      </button>

      <p>I am now learning {language}</p>
    </div>
  );
};
```

### On peut en utiliser plusieurs dans un même composant

```jsx
const LearningApp = () => {
  const [language, setLanguage] = useState('python');
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  return (
    <div>
      <button onClick={() => setLanguage('javascript')}>
        Change language to JS
      </button>

      <p>
        I am now learning {language} and have {yearsOfExperience} of experience
      </p>
    </div>
  );
};
```

### On peut y stocker des primitives plus complexes comme des objets

```jsx
const Form = () => {
  const [state, setState] = useState({
    name: 'Greg',
    isValid: true
  });

  return (
    <div>
      <p>
        <span>{state.name}</span>

        {state.isValid === false && <span>The name is not valid</span>}
      </p>

      <button
        onClick={() => {
          /*
           * On doit toujours utiliser le spread operator `...`
           * afin de copier le contenu du state pour modifier après
           * seulement les propriétés voulues
           */
          setState({
            ...state,
            name: ''
          });
        }}
      >
        Reset name
      </button>
    </div>
  );
};
```

## Le cycle de vie

### On peut effectuer des actions lorsque une `prop` ou une valeur de `state` change

```jsx
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // La fonction passé à `useEffect` est celle qui sera appelée
  useEffect(() => {
    console.log('Count updated');

    /*
     * On peut passer un tableau de dépendances
     * pour déterminer quand appeler cette fonction.
     * Ici, elle sera appelée seulement si `count` change
     */
  }, [count]);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Update count</button>
    </div>
  );
};
```

## Les listes

```jsx
const names = ['Bob', 'Jessica', 'Oliver', 'Jenny'];

/*
 * La méthode `.map()` permet à partir d'un tableau
 * de générer un nouveau tableau contenant
 * chacun des élément retournés
 */
const app = (
  <ul>
    {names.map((name, index) => {
      return (
        // On doit toujours passer un attribut `key`
        <li key={index}>{name}</li>
      );
    })}
  </ul>
);
```

## Les formulaires

```jsx
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <form>
      <label for="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <label for="address">Address:</label>
      <input
        id="address"
        type="text"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
    </form>
  );
};
```
