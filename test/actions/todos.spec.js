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
});
