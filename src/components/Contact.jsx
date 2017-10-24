import React from 'react';
import * as actions from '../Actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../Store.js';

class Contact extends React.Component {
  render() {
    return(
      <div>
        <h1>Contact</h1>
      </div>
    );
  }
};

export default Contact;