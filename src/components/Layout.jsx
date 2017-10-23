import React from 'react';
import * as actions from '../Actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../Store.js';
import { Link } from 'react-router';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Link to="/">Index</Link>
        <Link to="/about">About</Link>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default About;