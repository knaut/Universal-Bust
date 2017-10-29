import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import * as Store from './Store.js';

import createHistory from 'history/createBrowserHistory';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { createLogger } from 'redux-logger';

// REDUCERS
import counter from './reducers/counter.js';




import routes from './Routes.js';

// COMPONENTS
import Navigation from './components/Navigation.jsx';

// PAGES
import Index from './components/Index.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const rootReducer = combineReducers({
  counter,
  router: routerReducer
});

const history = createHistory();
const historyMiddleware = routerMiddleware( history );

const middleware = applyMiddleware(
  historyMiddleware,  
  createLogger()
);

const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__,
  middleware
);

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
};

render(
  <AppRouter />,
  document.getElementById('root')
);