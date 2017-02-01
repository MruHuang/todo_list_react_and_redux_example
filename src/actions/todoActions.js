import { createAction } from 'redux-actions';
import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TEXT,
  SHOW_ALL,
  SHOW_COMPLETED
} from '../constants/actionTypes';

export const createTodo = createAction(CREATE_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const changeText = createAction(CHANGE_TEXT);
export const showAll = createAction(SHOW_ALL);
export const showCompleted = createAction(SHOW_COMPLETED);