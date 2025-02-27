import { createAction } from 'redux-actions';
import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TEXT,
  COMPLETE_TODO,
  SHOW_ALL,
  SHOW_COMPLETED,
  EDIT_TODO,
  CREATE_QUERY_TODO,
  RESERVE_TEXT,
  SELECT_TODO,
  GOOGLE_DATA_TODO
} from '../constants/actionTypes';

export const createTodo = createAction(CREATE_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const changeText = createAction(CHANGE_TEXT);
export const completeTodo = createAction(COMPLETE_TODO);
export const showAll = createAction(SHOW_ALL);
export const showCompleted = createAction(SHOW_COMPLETED);
export const editTodo = createAction(EDIT_TODO);
export const reserveText = createAction(RESERVE_TEXT);
export const createQueryTodo = createAction(CREATE_QUERY_TODO);
export const selectTodo = createAction(SELECT_TODO);
export const googleTodo = createAction(GOOGLE_DATA_TODO);
