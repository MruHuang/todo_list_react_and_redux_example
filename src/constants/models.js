import Immutable from 'immutable';

export const TodoState = Immutable.fromJS({
  'todos': [
    {
      id: '1',
      text: '買一本好書',
      completed: false,
      isEdit: false
    },
    {
      id: '2',
      text: '打電話給小明',
      completed: true,
      isEdit: false
    },
    {
      id: '3',
      text: '吃大餐',
      completed: false,
      isEdit: false
    }
  ],
  'todo': {
    text: '',
    completed: false
  },
  filter: 'show_all'
});
