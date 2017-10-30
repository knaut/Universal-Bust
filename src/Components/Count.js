import React from 'react';

// DUX
import * as Counter from '../dux/Counter.js';

class Count extends React.Component {
  handleIncrement() {

  }

  handleDecrement() {

  }

  render() {
    console.log(Counter);

    return (
      <div id='count'>
        <button onClick={this.handleIncrement}>Increment</button>
        <span>the count</span>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Count;