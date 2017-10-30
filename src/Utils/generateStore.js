import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../dux/Root.js';

const generateStore = function(initialState, middleware) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware( middleware )
  );
}

export default generateStore;