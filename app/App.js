import React from 'react'
import { renderRoutes } from 'react-router-config'

// GLOBAL COMPONENTS
// import Navigation from './Navigation.js'

class App extends React.Component {

  render () {
    console.log(this)

    return (
      <React.Fragment>
        { renderRoutes(this.props.route.routes) }
      </React.Fragment>
    )
  }
}

export default App
