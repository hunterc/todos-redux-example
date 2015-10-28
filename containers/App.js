import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../actions/todos';

import Header from '../components/Header.jsx';
import MainSection from '../components/MainSection.jsx';

class App extends Component {
	render() {
    	const { todos, actions } = this.props;
		return (
			<div>
				<Header addTodo={actions.addTodo} />
				<MainSection todos={todos} actions={actions} />
			</div>
		);
	}
}

const selector = (state) => ({ todos: state.todos });
const actions = (dispatch) => ({ actions: bindActionCreators(todoActions, dispatch) });

export default connect(selector, actions)(App);
