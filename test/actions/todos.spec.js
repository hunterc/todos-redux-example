import expect from 'expect';
import * as types from '../../constants/todos';
import * as actions from '../../actions/todos';

describe('todo actions', () => {
	it('addTodo should create ADD_TODO action', () => {
		expect(actions.addTodo('Use Redux')).toEqual({
			type: types.ADD_TODO,
			text: 'Use Redux'
		});
	});

	it('deleteTodo should create DELETE_TODO action', () => {
		expect(actions.deleteTodo(1)).toEqual({
			type: types.DELETE_TODO,
			id: 1
		});
	});

	it('editTodo should create EDIT_TODO action', () => {
		expect(actions.editTodo(1, 'Use redux everywhere')).toEqual({
			type: types.EDIT_TODO,
			id: 1,
			text: 'Use redux everywhere'
		});
	});

	it('completeTodo should create COMPLETE_TODO action', () => {
		expect(actions.completeTodo(1)).toEqual({
			type: types.COMPLETE_TODO,
			id: 1
		});
	});
});
