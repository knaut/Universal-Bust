import React from 'react'
import { renderRoutes } from 'react-router-config'

// GLOBAL COMPONENTS
// import Navigation from './Navigation.js'

class App extends React.Component {

  render () {
    console.log(this.props)

    return (
      <div id='app'>
        { renderRoutes(this.props.route.routes) }
      </div>
    )
  }
}

export default App
