import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

import {
  deleteTodo,
  completeTodo,
  editTodo,
  changeText,
  createQueryTodo
} from '../../actions';

export default connect(
  (state) => ({
    todos: state.getIn(['todo', 'todos']),
    filter: state.getIn(['todo', 'filter']),
    select: state.getIn(['todo', 'select'])
  }),
  (dispatch) => ({
    onDeleteTodo: (index) => () => (
      dispatch(deleteTodo({ index }))
    ),
    onCompleteTodo: (index, status) => () => (
      dispatch(completeTodo({ index, status}))
    ),
    onEditTodo: (index, isEdit) => () => {
      dispatch(editTodo({ index, isEdit}))
    },
    onChangeText: (index, event) => () => {
      var text = event ? event.target.value : '';
      dispatch(changeText({ index, text}))
    },
    onAddQueryTodo: (index) => ()=>{
      dispatch(createQueryTodo({ index }))
    }
  })
)(TodoList);