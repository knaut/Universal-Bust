import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store.js';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
// PAGES
import Layout from './components/Layout.jsx';
import Index from './components/Index.jsx';
import About from './components/About.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Index}/>
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);