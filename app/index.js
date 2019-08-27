import '@babel/polyfill'

// IMPORTS
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// COMPONENTS
import App from './App'

// UTILS
import generateStore from '../utils/generateStore'


const { store, history } = generateStore({}, 'client')
console.log(store, history)

const Client = () => (
  <App/>
)

ReactDOM.render(<Client />, document.getElementById('root'))
