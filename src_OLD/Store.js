import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';

// REDUCERS
import counter from './reducers/counter.js';

var history = null;

if (typeof window === 'undefined') {

  var rootReducer = combineReducers({
    counter
  });

  var middleware = applyMiddleware(
    createLogger()
  );

} else {

  var rootReducer = combineReducers({
    counter,
    router: routerReducer
  });

  history = createHistory();
  var historyMiddleware = routerMiddleware(history);

  var middleware = applyMiddleware(
    historyMiddleware,
    createLogger()
  );
}

var store = createStore( rootReducer, middleware);

export { store, history };

