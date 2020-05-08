import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Home } from './screens/Home';
import { Article } from './screens/Article';
import { Header } from './components/Header';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: #f4f0ec;
  }
`;

export const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/random/:title" component={Article} />
      </Switch>
    </Router>
  </>
);
