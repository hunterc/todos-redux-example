import { ADD_TODO } from '../constants/todos';
import uuid from 'node-uuid';

export default function todos(state = [], action) {
	switch (action.type) {
	case ADD_TODO:
		return [{
			id: state.reduce((maxId, todo) =>  Math.max(todo.id, maxId), -1) + 1,
			completed: false,
			text: action.text
		}, ...state];

	default:
		return state;
	}
}
