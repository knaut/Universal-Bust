import '@babel/polyfill'

// IMPORTS
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// COMPONENTS
import App from './App'

// UTILS
import generateStore from '../utils/generateStore'

// ROUTES
import routes from '../routes'

const generated = generateStore({}, 'client')
const { store, history } = generated

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))
