import React from 'react';
import * as actions from '../Actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../Store.js';
import { Link } from 'react-router';

class About extends React.Component {
  render() {
    return(
      <div>
        About
      </div>
    );
  }
};

export default About;