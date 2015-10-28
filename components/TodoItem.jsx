import React, { PropTypes } from 'react';
import TodoTextInput from './TodoTextInput.jsx';

export default class TodoItem extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			editing: false
		};
	}
	
	render() {
		const { todo, deleteTodo } = this.props;
		
		return (
			<li>
				{todo.text}
				<button className="destroy" onClick={() => deleteTodo(todo.id)} />
			</li>
		);
	}	
}
