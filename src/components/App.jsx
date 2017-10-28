import React from 'react';
import Navigation from './Navigation.jsx';

var App;

if (typeof window === 'undefined') {
  App = () => (
    <div>This is from the server</div>
  );
} else {
  App = () => (
    <div>
      <Navigation />
    </div>
  );
}

export default App;