import '@babel/polyfill'

// IMPORTS
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <h1>This is the app</h1>
)

ReactDOM.render(<App/>, document.getElementById('root'))