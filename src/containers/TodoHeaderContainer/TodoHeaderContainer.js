import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import {
  reserveText,
  createTodo,
  selectTodo,
  googleTodo
} from '../../actions';

export default connect(
  (state) => ({
    todo: state.getIn(['todo', 'todo']),
    select: state.getIn(['todo', 'select']),
    todos: state.getIn(['todo', 'todos'])
  }),
  (dispatch) => ({
    onReserveText: (event) => (
      dispatch(reserveText(event.target.value))
    ),
    onCreateTodo: (event) => {
      dispatch(createTodo());
      dispatch(reserveText(''));
    },
    onSelectTodo:(event)=>{
      dispatch(selectTodo());
    },
    onGoogleGetTodo:(event)=>{
      dispatch(googleTodo());
    }
  })
)(TodoHeader);