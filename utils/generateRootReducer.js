// IMPORTS
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// REDUCERS

export default history => combineReducers({
  router: connectRouter(history),
  // add your reducers here...
})