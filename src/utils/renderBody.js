import { renderToString } from 'react-dom/server';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as Store from '../Store.js';
const store = Store.store;

// COMPONENTS
import Navigation from '../components/Navigation.jsx';

export default function renderBody(Component) {
  // "Component" is a stand in for a React component reference we pass in by argument
  return( 
    <Provider store={Store.store}>
        <div id="app-container">
          <Navigation/>
          <Component/>
        </div>
    </Provider>
  )
}