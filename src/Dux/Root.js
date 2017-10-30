import { combineReducers } from 'redux';

// DUX
import count from '../dux/Counter.js';

// import all other reducers here
// the root reducer will be fed to any generated store

const rootReducer = combineReducers({
  count
});

export default rootReducer;