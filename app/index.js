import '@babel/polyfill'

// IMPORTS
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

const App = () => (
  <h1>This is the app</h1>
)

ReactDOM.render(<App />, document.getElementById('root'))
