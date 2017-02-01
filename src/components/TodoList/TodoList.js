import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = ({
  todos,
  filter,
  onDeleteTodo,
}) => (
  <div>
    <ul>
    {
      todos.map((todo, index) => (
        <li key={index} className={(filter == 'show_completed' && todo.get('completed')) ? 'hide' : 'show' }>
          {todo.get('text')}
          <button onClick={ onDeleteTodo(index) }>X</button>
        </li>
      )).toJS()
    }
    </ul>
  </div>
);

export default TodoList;