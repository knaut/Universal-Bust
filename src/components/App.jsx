import React from 'react';
import { renderRoutes } from 'react-router-config';

// COMPONENTS
import Navigation from './Navigation.jsx';

class App extends React.Component {
  render() {
    // console.log(this)
    return (
      <div id="app-root">
        <Navigation/>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

export default App;