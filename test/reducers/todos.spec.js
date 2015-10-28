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

	it('should handle DELETE_TODO', () => {
		expect(
			todos([{
				text: 'Run the tests',
				completed: false,
				id: 1
			}, {
				text: 'Use redux',
				completed: false,
				id: 0
			}], {
				type: types.DELETE_TODO,
				id: 1
			})
		).toEqual([{
			text: 'Use redux',
			completed: false,
			id: 0
		}]);
	});

	it('should handle EDIT_TODO', () => {
		expect(
			todos([{
				text: 'Run the tests',
				completed: false,
				id: 1
			}, {
				text: 'Use redux',
				completed: false,
				id: 0
			}], {
				type: types.EDIT_TODO,
				text: 'Fix the tests',
				id: 1	
			})
		).toEqual([{
			text: 'Fix the tests',
			completed: false,
			id: 1
		}, {
			text: 'Use redux',
			completed: false,
			id: 0
		}])
	});

	it('should handle COMPLETE_TODO', () => {
		expect(
			todos([{
				text: 'Run the tests',
				completed: false,
				id: 1
			}, {
				text: 'Use redux',
				completed: false,
				id: 0
			}], {
				type: types.COMPLETE_TODO,
				id: 1
			})
		).toEqual([{
			text: 'Run the tests',
			completed: true,
			id: 1
		}, {
			text: 'Use redux',
			completed: false,
			id: 0
		}]);
	});
});
