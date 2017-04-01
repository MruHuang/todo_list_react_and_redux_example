import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

import {
  deleteTodo,
  completeTodo,
  editTodo,
  changeText
} from '../../actions';

export default connect(
  (state) => ({
    todos: state.getIn(['todo', 'todos']),
    filter: state.getIn(['todo', 'filter'])
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
    }
  })
)(TodoList);