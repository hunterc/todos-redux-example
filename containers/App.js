import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
	  	<h1>Hello</h1>
      </div>
    );
  }
}
export default connect()(App);
