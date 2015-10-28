import React, { PropTypes } from 'react';
import TodoTextInput from './TodoTextInput.jsx';

export default class Header extends React.Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	};

	handleSave(text) {
		if (text.length !== 0) {
			this.props.addTodo(text);
		}
	}

	render() {
		return (
			<header className="header">
				<h1>todos</h1>
				<TodoTextInput
					newTodo 
					onSave={::this.handleSave}
					placeholder="What needs to be done?" 
				/>
			</header>
		);
	}
}
