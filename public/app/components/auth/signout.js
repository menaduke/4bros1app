import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Welcome from '../welcome';


class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <Welcome />;
  }
}

export default connect(null, actions)(Signout);
