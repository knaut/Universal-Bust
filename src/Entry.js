import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Store from './Store.js';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

// PAGES
// import Layout from './components/Layout.jsx';
import Index from './components/Index.jsx';
// import About from './components/About.jsx';

ReactDOM.render(
  <Provider store={Store.store}>
    <ConnectedRouter history={Store.history}>
      <div>
        <Route exact path="/" component={Index} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);