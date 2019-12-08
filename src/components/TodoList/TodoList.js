import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Alert from 'react-bootstrap/lib/Alert';


const TodoList = ({
  todos,
  filter,
  select,
  onDeleteTodo,
  onCompleteTodo,
  onEditTodo,
  onChangeText,
  onAddQueryTodo
}) => (
  <div>
    <ListGroup>
    {
      todos.map((todo, index) => (
        <ListGroupItem key={index} className={(filter == 'show_completed' && !todo.get('completed') || (select.get('index') != index && select.get('completed') == true)) ? 'hide' : 'show' }>
          <Checkbox inline={true} checked={(todo.get('completed'))} onChange={ onCompleteTodo(index, todo.get('completed')) }>
            <span className={(todo.get('completed')) ? 'isCompleted' : '' }>{ todo.get('text') }</span>
          </Checkbox>
          <Alert>最後修改日期:{todo.get('date')}</Alert>
          <Button onClick={ onAddQueryTodo(index) } className={(todo.get('isEdit')) ? 'hide' : 'inline' }>新增</Button>
          <Button onClick={ onDeleteTodo(index) } className={(todo.get('isEdit')) ? 'hide' : 'inline' }>刪除</Button>
          <Button onClick={ onEditTodo(index, todo.get('isEdit')) } className={(todo.get('isEdit')) ? 'hide' : 'inline' }>編輯</Button>
          <Alert className={(todo.get('isEdit')) ?  'inline': 'hide' }>
          <FormControl type="text" onChange={ onChangeText(index, event) }/>
          </Alert>
          <Button onClick={ onEditTodo(index, todo.get('isEdit')) } className={!(todo.get('isEdit')) ? 'hide' : 'inline' }>結束編輯</Button>
        </ListGroupItem>
      )).toJS()
    }
    </ListGroup>
  </div>
);

export default TodoList;