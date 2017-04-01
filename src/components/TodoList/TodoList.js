import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = ({
  todos,
  filter,
  onDeleteTodo,
  onCompleteTodo,
  onEditTodo,
  onChangeText
}) => (
  <div>
    <ul>
    {
      todos.map((todo, index) => (
        <li key={index} className={(filter == 'show_completed' && !todo.get('completed')) ? 'hide' : 'show' }>
          { todo.get('text') }
          <button onClick={ onDeleteTodo(index) }>刪除</button>
          <button onClick={ onCompleteTodo(index) }>完成</button>
          <button className={(todo.get('isEdit')) ? 'hide' : 'show' } onClick={ onEditTodo(index, todo.get('isEdit')) }>編輯</button>
          <button className={!(todo.get('isEdit')) ? 'hide' : 'show' } onClick={ onEditTodo(index, todo.get('isEdit')) }>結束編輯</button>
          <input className={!(todo.get('isEdit')) ? 'hide' : 'show' } onChange={ onChangeText(index, event) } />
        </li>
      )).toJS()
    }
    </ul>
  </div>
);

export default TodoList;