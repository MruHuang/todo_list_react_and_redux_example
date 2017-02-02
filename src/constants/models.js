import Immutable from 'immutable';

export const TodoState = Immutable.fromJS({
  'todos': [],
  'todo': {
    text: '',
    completed: false,
  },
  filter: 'show_all'
});
