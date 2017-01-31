import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = ({
  todos,
  onDeleteTodo,
}) => (
  <div>
    <ul>
    {
      todos.map((todo, index) => (
        <li key={ index }>
          { todo.text }
          <button onClick={ onDeleteTodo(index) }>X</button>
        </li>
      ))
    }
    </ul>
  </div>
);

export default TodoList;