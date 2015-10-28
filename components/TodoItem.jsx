import React, { PropTypes } from 'react';
import TodoTextInput from './TodoTextInput.jsx';

import cx from 'classnames';

export default class TodoItem extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			editing: false
		};
	}

	handleDoubleClick() {
		this.setState({ editing: true });
	}

	handleSave(id, text) {
		if (text.length === 0) {
			this.props.deleteTodo(id);
		} else {
			this.props.editTodo(id, text);
		}

		this.setState({ editing: false });
	}
	
	render() {
		const { todo, completeTodo, deleteTodo } = this.props;
		
		let element;
		if (this.state.editing) {
			element = (
				<TodoTextInput
					text={todo.text}
					editing={this.state.editing}
					onSave={(text) => this.handleSave(todo.id, text)}
				/>
			);
		} else {
			element = (
				<div className="view">
					<input className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={() => completeTodo(todo.id)}
					/>
					<label onDoubleClick={::this.handleDoubleClick}>
						{todo.text}
					</label>
					<button className="destroy" onClick={() => deleteTodo(todo.id)} />
				</div>
			);
		}

		return (
			<li className={cx({
				completed: todo.completed,
				editing: this.state.editing
			})}>
				{element}
			</li>
		);
	}	
}
