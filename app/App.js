import React, { Component } from 'react'

import {
  Grommet,
  Box,
  Heading,
  Text,
  Button,
  grommet as grommetTheme
} from 'grommet'

import { renderRoutes } from 'react-router-config'

const Header = () => (
  <Box background='light-2' align='start' pad='large'>
    <Heading level={2}>Welcome to Universal Bust 🌟🌌</Heading>
    <Text size={'medium'}>A single-page, server-rendered, styled-component boilerplate for static webpages and sites.</Text>
  </Box>
)

const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        border={{side: 'bottom'}}
        background={hover ? "accent-1" : undefined}
        pad={{ horizontal: "large", vertical: "medium" }}
      >
        <Text size="large">{label}</Text>
      </Box>
    )}
  </Button>
);

class Navigation extends Component {
  state = {
    activeIndex: 0
  }

  render() {
    console.log(this)
    return (
      <Box fill direction='row'>
        <Box background='neutral-3'>
        {['Home', 'Labs', 'Trees', 'Bikes'].map((label, index) => (
          <SidebarButton
            key={label}
            label={label}
            active={index === this.state.activeIndex}
            onClick={() => this.setState({ activeIndex: index })}
          />
        ))}
        </Box>
      </Box>
    )
  }
}

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Grommet
          full
          cssVars
          theme={grommetTheme}
        >
          <Header/>
          <Navigation/>
          { renderRoutes(this.props.route.routes) }
        </Grommet>
      </React.Fragment>
    )
  }
}

export default App
