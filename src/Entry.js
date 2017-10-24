import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Store from './Store.js';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

// COMPONENTS
import Navigation from './components/Navigation.jsx';
// PAGES
import Index from './components/Index.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';


ReactDOM.render(
  <Provider store={Store.store}>
    <ConnectedRouter history={Store.history}>
      <div>
        <Navigation />
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);