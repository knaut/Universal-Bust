import { combineReducers } from 'redux';

// DUX
import count from '../dux/Counter.js';

const rootReducer = combineReducers({
  count
});

export default rootReducer;