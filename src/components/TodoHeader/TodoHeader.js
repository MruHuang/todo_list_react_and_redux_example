import React from 'react';
import ReactDOM from 'react-dom';

const TodoHeader = ({
  onChangeText,
  onCreateTodo,
  todo,
}) => (
  <div>
    <h1>Todo List</h1>
    <input type="text" value={todo.get('text')} onChange={onChangeText} />
    <button onClick={onCreateTodo}>add new item</button>
  </div>
);

export default TodoHeader;