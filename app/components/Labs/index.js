import React from 'react'
import {
  Box
} from 'grommet'

import {
  Test
} from 'grommet-icons'

class Labs extends React.Component {
  render () {
    console.log(this)
    return (
      <Box align='center' justify='center' fill>
        <Test color='accent-2' size='xlarge'/>
      </Box>
    )
  }
}

export default Labs
