import { renderToString } from 'react-dom/server';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter, Route } from 'react-router';
import * as Store from '../Store.js';
const store = Store.store;

// COMPONENTS
import Navigation from '../components/Navigation.jsx';

import Index from '../components/Index.jsx';

export default function renderBody(Component, location, context) {
  // "Component" is a stand in for a React component reference we pass in by argument
  return( 
    <Provider store={Store.store}>
      <StaticRouter location={location} context={context}>
        <div id="app-container">
          <Navigation />
          
          <Route exact path="/" component={Index} />
          
        </div>
      </StaticRouter>
    </Provider>
  )
}