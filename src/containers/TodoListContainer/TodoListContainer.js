import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

import {
  deleteTodo,
} from '../../actions';

export default connect(
  (state) => ({
  	todos: [{
	    id: '1',
	    text: '2',
	    updatedAt: '3',
	    completed: false,
	  },
	  {
	    id: '2',
	    text: '3',
	    updatedAt: '4',
	    completed: false,
	  }]//,
    //todos: state.getIn(['todos'])
  }),
  (dispatch) => ({
    onDeleteTodo: (index) => () => (
      dispatch(deleteTodo({ index }))
    )
  })
)(TodoList);

