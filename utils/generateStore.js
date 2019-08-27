// IMPORTS
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory, createMemoryHistory } from 'history'

// REDUX MIDDLEWARE
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { routerMiddleware } from 'connected-react-router'

// UTILS
import generateRootReducer from './generateRootReducer'

// export this history object to be used by our ConnectedRouter later

export default function generateStore(state, env) {
  const initialState = state || {}

  let store
  let history

  if (env === 'client') {
    history = createBrowserHistory()

    store = createStore(
      generateRootReducer(history),
      initialState,
      compose(
        applyMiddleware(
          routerMiddleware(history),
          promise,
          thunk,
          createLogger()
        )
      )
    )
  }

  if (env === 'server') {
    history = createMemoryHistory()

    store = createStore(
      generateRootReducer(history),
      initialState,
      compose(
        applyMiddleware(
          routerMiddleware(history),
          promise,
          thunk,
          // createLogger()
        )
      )
    )
  }

  return {
    store,
    history
  }
}

