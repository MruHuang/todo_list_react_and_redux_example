import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/models';


 const todoReducers = handleActions({
  CREATE_TODO: (state, { payload }) => {
    
    let Today = new Date();
    let date = Today.getFullYear()+ "-" + (Today.getMonth()+1) + "-" + Today.getDate();
    if(state.getIn(['todo', 'text']) != ''){
      let todos = state.get('todos').push(state.get('todo').set('date',date));
      return state.set('todos', todos);
    }
    return state.setIn(['todos', payload.index, 'isEdit'], payload.isEdit);
  },
  DELETE_TODO: (state, { payload }) => {
    return state.set('todos', state.get('todos').splice(payload.index, 1))
  },
  CHANGE_TEXT: (state, { payload }) => {
    return state.setIn(['todos', payload.index, 'text'], payload.text);
  },
  COMPLETE_TODO: (state, { payload }) => {
    return state.setIn(['todos', payload.index, 'completed'], !payload.status);
  },
  SHOW_ALL: (state) => (
    state.set('filter', 'show_all')
  ),
  SHOW_COMPLETED: (state) => (
    state.set('filter', 'show_completed')
  ),
  EDIT_TODO: (state, { payload }) => {
    let Today = new Date();
    let date = Today.getFullYear()+ "-" + (Today.getMonth()+1) + "-" + Today.getDate();
    return state.setIn(['todos', payload.index, 'isEdit'], !payload.isEdit).setIn(['todos', payload.index, 'date'], date);
  },
  RESERVE_TEXT: (state, { payload }) => {
    return state.setIn(['todo', 'text'], payload);
  },
  CREATE_QUERY_TODO:(state, { payload }) => {
    let Today = new Date();
    let date = Today.getFullYear()+ "-" + (Today.getMonth()+1) + "-" + Today.getDate();
    if(state.getIn(['todo', 'text']) != ''){
      let todos = state.get('todos').splice(payload.index, 0, state.get('todo').set('date',date));
      return state.set('todos', todos);
    }
    return state.setIn(['todos', payload.index, 'isEdit'], payload.isEdit);
  },
  SELECT_TODO:(state, { payload }) => {
    let todos = state.get('todos');
    const updatedList = state.get('todos').findIndex(function(item, index, array){
      return item.get('text') == state.getIn(['todo','text']);
    });
    if(updatedList != -1)
      return state.setIn(['select','index'],updatedList).setIn(['select','completed'],true);
    else
      return state.setIn(['select','completed'],false);
  },
  GOOGLE_DATA_TODO:(state, { payload }) =>{
    listUpcomingEvents();
    const events = getEvents();
    let todos = state.get('todos');
    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        if (!when) {
          when = event.start.date;
        }
        summary = event.summary;
        todos = todos.push(state.get('todo').set('text',summary).set('date',when));
      }
    }
    // let todos = state.get('todos').push(state.get('todo').set('text',summary).set('date',when));
    return state.set('todos', todos);
  }
}, TodoState);

export default todoReducers;
