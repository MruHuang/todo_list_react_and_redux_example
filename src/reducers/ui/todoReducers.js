import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/models'; //載入初始值

import {
	CREATE_TODO,
	DELETE_TODO,
	CHANGE_TEXT
} from '../../constants/actionTypes';

const todoReducers = handleActions({
	CREATE_TODO: (state) => {
		let todos = state.get('todos').push(state.get('todo'));
		return state.set('todos', todos);
	},
	DELETE_TODO: (state, { payload }) => {
		console.log('DELETE_TODO');
		return state.set('todos', state.get('todos').splice(payload.index, 1))
	},
	CHANGE_TEXT: (state, { payload }) => (
		state.merge({ 'todos': payload })
	)
}, TodoState);

export default todoReducers;