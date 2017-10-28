import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

// REDUCERS
import counter from './reducers/counter.js';

const rootReducer = combineReducers({
  counter,
  router: routerReducer
});

const store = createStore( rootReducer );

export default store;