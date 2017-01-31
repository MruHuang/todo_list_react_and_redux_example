import React from 'react';
import ReactDOM from 'react-dom';

const TodoHeader = ({
  onChangeText,
  onCreateTodo
}) => (
  <div>
    <h1>Todo List</h1>
    <input type="text" onChange={ onChangeText } />
    <button onClick={ onCreateTodo }>送出</button>
  </div>
);

export default TodoHeader;