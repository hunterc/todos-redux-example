import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem.jsx';

export default class MainSection extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	};

	constructor(props, context) {
		super(props, context);
	}

	render() {
		const { todos, actions } = this.props;

		return (
			<section className="main">
				<ul className="todo-list">
					{todos.map(todo =>
						<TodoItem key={todo.id} todo={todo} {...actions} />
					)}
				</ul>
			</section>
		);
	}
}
