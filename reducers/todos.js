import { ADD_TODO } from '../constants/todos';
import uuid from 'node-uuid';

export default function todos(state = [], action) {
	switch (action.type) {
	case ADD_TODO:
		return [{
			id: uuid.v4(),
			completed: false,
			text: action.text
		}, ...state];

	default:
		return state;
	}
}
