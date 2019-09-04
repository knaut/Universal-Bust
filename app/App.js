import React from 'react'

import {
  Grommet,
  Box,
  grommet as grommetTheme
} from 'grommet'

import { renderRoutes } from 'react-router-config'


const Navigation = () => (
  <Box background='black'>
    <h1>This is a navigation component.</h1>
  </Box>
)

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Grommet
          full
          cssVars
          
        >
          <Navigation/>
          { renderRoutes(this.props.route.routes) }
        </Grommet>
      </React.Fragment>
    )
  }
}

export default App
