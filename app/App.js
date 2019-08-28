import React from 'react'
import { renderRoutes } from 'react-router-config'

// GLOBAL COMPONENTS

const Navigation = () => (
  <h1>This is a navigation component.</h1>
)

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navigation/>
        { renderRoutes(this.props.route.routes) }
      </React.Fragment>
    )
  }
}

export default App
