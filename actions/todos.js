import * as types from '../constants/todos';

export function addTodo(text) {
	return { type: types.ADD_TODO, text };
}
