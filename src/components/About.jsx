import React from 'react';
import * as actions from '../Actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../Store.js';

class About extends React.Component {
  render() {
    return(
      <div>
        <h1>About</h1>
      </div>
    );
  }
};

export default About;