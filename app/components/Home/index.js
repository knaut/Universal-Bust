import React from 'react'
import {
  Box
} from 'grommet'

import {
  Home 
} from 'grommet-icons'

class HomePage extends React.Component {
  render () {
    console.log(this)
    return (
      <Box align='center' justify='center' fill>
        <Home size='xlarge'/>
      </Box>
    )
  }
}

export default HomePage
