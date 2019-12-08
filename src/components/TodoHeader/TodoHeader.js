import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Alert from 'react-bootstrap/lib/Alert';;
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Checkbox from 'react-bootstrap/lib/Checkbox';

const TodoHeader = ({
  onCreateTodo,
  onSelectTodo,
  onReserveText,
  onGoogleGetTodo,
  todo
}) => (
  <div>
    <h1>Todo List</h1>
    <FormGroup>
      <FormControl type="text" className="inline" value={todo.get('text')} onChange={onReserveText} />
      <Button onClick={onCreateTodo}>新增</Button>
      <Button onClick={onSelectTodo}>查詢</Button>
      <Button onClick={onGoogleGetTodo}>取得GOOGLE日歷</Button>
    </FormGroup>
  </div>
);

export default TodoHeader;