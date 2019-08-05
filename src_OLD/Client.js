import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderRoutes } from 'react-router-config'

import Routes from './Routes.js'
import generateStore from './Utils/generateStore.js'

import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

// loads all of bootstrap's js into the client bundle
// https://getbootstrap.com/docs/4.0/getting-started/webpack/
import 'bootstrap'

const store = generateStore(
  window.__PRELOADED_STATE__,
  applyMiddleware(
    promise(),
    thunk,
    createLogger()
  )
)

const Client = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(Routes)}
      </BrowserRouter>
    </Provider>
  )
}

render(
  <Client />,
  document.getElementById('root')
)
