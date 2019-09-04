import React from 'react'
import {
  Box
} from 'grommet'

import {
  TreeOption
} from 'grommet-icons'

class Trees extends React.Component {
  render () {
    console.log(this)
    return (
      <Box align='center' justify='center' fill>
        <TreeOption color='status-ok' size='xlarge'/>
      </Box>
    )
  }
}

export default Trees
