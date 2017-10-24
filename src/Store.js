import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';

// REDUCERS
import counter from './reducers/counter.js';

const rootReducer = combineReducers({
  counter,
  router: routerReducer
});

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(
  historyMiddleware,
  createLogger()
);

const store = createStore( rootReducer, middleware);

export { store, history };