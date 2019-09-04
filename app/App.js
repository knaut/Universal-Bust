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

import { Link } from 'react-router-dom'

import { css } from '@emotion/core'

const Header = () => (
  <Box background='light-2' align='start' pad='large' height='medium'>
    <Heading level={2}>Welcome to Universal Bust 🌟🌌</Heading>
    <Text size={'medium'}>A single-page, server-rendered, styled-component boilerplate for static webpages and sites.</Text>
  </Box>
)

const SidebarButton = ({ label, ...rest }) => {
  const url = label !== 'Home' ? `/${label.toLowerCase()}` : '/'

  return (
    <Button plain {...rest}>
      {({ hover }) => (
        <Link to={url} css={css`
            color: var(--light-1);
            text-decoration: none;
            &:hover {
              color: var(--dark-1);
            }
            &:active {
              color: var(--light-2);
            }
            &:visited {
              color: var(--light-2);
            }
          `}>
          <Box
            border={{side: 'bottom'}}
            background={hover ? "accent-1" : undefined}
            pad={{ horizontal: "large", vertical: "medium" }}
          >
            <Text size="large">{label}</Text>
          </Box>
        </Link>
      )}
    </Button>
  )
};

class Navigation extends Component {
  state = {
    activeIndex: 0
  }

  render() {
    console.log(this)
    return (
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
    )
  }
}

const Footer = () => (
  <Box background='light-5' fill='horizontal' justify='center' align='center' pad='large'>
    <Text>{`© ${new Date().getFullYear()} My Awesome Project`}</Text>
  </Box>
)

class App extends Component {
  render () {
    console.log(this)
    return (
      <React.Fragment>
        <Grommet
          full
          cssVars
          theme={grommetTheme}
        > 
          <Box fill>
            <Header/>
            <Box fill direction='row'>
              <Navigation/>
              { renderRoutes(this.props.route.routes) }
            </Box>
          </Box>
          <Footer/>
        </Grommet>
      </React.Fragment>
    )
  }
}

export default App
