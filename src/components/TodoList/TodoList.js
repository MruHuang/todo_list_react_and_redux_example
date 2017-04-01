import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';

const TodoList = ({
  todos,
  filter,
  onDeleteTodo,
  onCompleteTodo,
  onEditTodo,
  onChangeText
}) => (
  <div>
    <ListGroup>
    {
      todos.map((todo, index) => (
        <ListGroupItem key={index} className={(filter == 'show_completed' && !todo.get('completed')) ? 'hide' : 'show' }>
          <Checkbox inline={true} checked={(todo.get('completed'))} onChange={ onCompleteTodo(index, todo.get('completed')) }>
            <span className={(todo.get('completed')) ? 'isCompleted' : '' }>{ todo.get('text') }</span>
          </Checkbox>
          <Button onClick={ onDeleteTodo(index) }>刪除</Button>
          <Button onClick={ onEditTodo(index, todo.get('isEdit')) } className={(todo.get('isEdit')) ? 'hide' : 'inline' }>編輯</Button>
          <FormControl type="text" onChange={ onChangeText(index, event) } className={!(todo.get('isEdit')) ? 'hide' : 'inline' } />
          <Button onClick={ onEditTodo(index, todo.get('isEdit')) } className={!(todo.get('isEdit')) ? 'hide' : 'inline' }>結束編輯</Button>
        </ListGroupItem>
      )).toJS()
    }
    </ListGroup>
  </div>
);

export default TodoList;