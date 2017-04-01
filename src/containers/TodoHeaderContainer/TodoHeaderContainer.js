import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import {
  reserveText,
  createTodo,
} from '../../actions';

export default connect(
  (state) => ({
    todo: state.getIn(['todo', 'todo'])
  }),
  (dispatch) => ({
    onReserveText: (event) => (
      dispatch(reserveText(event.target.value))
    ),
    onCreateTodo: (event) => {
      dispatch(createTodo());
      dispatch(reserveText(''));
    }
  })
)(TodoHeader);