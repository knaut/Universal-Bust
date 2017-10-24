import React from 'react';
import * as actions from '../Actions.js';
import * as Store from '../Store.js';
import { push } from 'react-router-redux';


class Navigation extends React.Component {

  handleIndexClick() {
    Store.store.dispatch( push('/') );
  }

  handleAboutClick() {
    Store.store.dispatch( push('/about') );
  }

  handleContactClick() {
    Store.store.dispatch( push('/contact') );
  }

  render() {
    return (
      <ul className="navigation">
        <li>
          <button onClick={this.handleIndexClick.bind(this)}>Index</button>
        </li>
        <li>
          <button onClick={this.handleAboutClick.bind(this)}>About</button>
        </li>
        <li>
          <button onClick={this.handleContactClick.bind(this)}>Contact</button>
        </li>
      </ul>
    );
  }
}

export default Navigation;