import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

const TodoHeader = ({
  onCreateTodo,
  onReserveText,
  todo,
}) => (
  <div>
    <h1>Todo List</h1>
    <FormGroup>
      <FormControl type="text" className="inline" value={todo.get('text')} onChange={onReserveText} />
      <Button onClick={onCreateTodo}>新增</Button>
    </FormGroup>
  </div>
);

export default TodoHeader;