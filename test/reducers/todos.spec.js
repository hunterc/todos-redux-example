import expect from 'expect';
import todos from '../../reducers/todos';
import * as types from '../../constants/todos';

describe('todos reducer', () => {
	it('should handle initial state', () => {
		expect(
			todos(undefined, {})
		).toEqual([]);
	});

	it('should handle ADD_TODO', () => {
		expect(
			todos([], {
				type: types.ADD_TODO,
				text: 'Run the tests'
			})
		).toEqual([{
			text: 'Run the tests',
			completed: false,
			id: 0
		}]);

		expect(
			todos([{
				text: 'Use Redux',
				completed: false,
				id: 0
			}], {
				type: types.ADD_TODO,
				text: 'Run the tests'
			})
		).toEqual([{
			text: 'Run the tests',
			completed: false,
			id: 1
		}, {
			text: 'Use Redux',
			completed: false,
			id: 0
		}]);

		expect(
			todos([{
				text: 'Run the tests',
				completed: false,
				id: 1
			}, {
				text: 'Use Redux',
				completed: false,
				id: 0
			}], {
				type: types.ADD_TODO,
				text: 'Fix the tests'
			})
		).toEqual([{
			text: 'Fix the tests',
			completed: false,
			id: 2
		}, {
			text: 'Run the tests',
			completed: false,
			id: 1
		}, {
			text: 'Use Redux',
			completed: false,
			id: 0
		}]);
	});
});
