import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

import {
  deleteTodo,
  completeTodo
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
    onCompleteTodo: (index) => () => (
      dispatch(completeTodo({ index }))
    )
  })
)(TodoList);