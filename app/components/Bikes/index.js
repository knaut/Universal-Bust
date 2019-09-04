import React from 'react'
import {
  Box
} from 'grommet'

import {
  Bike
} from 'grommet-icons'

class Bikes extends React.Component {
  render () {
    console.log(this)
    return (
      <Box align='center' justify='center' fill>
        <Bike color='neutral-2' size='xlarge'/>
      </Box>
    )
  }
}

export default Bikes
