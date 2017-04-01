import Immutable from 'immutable';

export const TodoState = Immutable.fromJS({
  'todos': [
    {
      text: '買一本好書',
      completed: false,
      isEdit: false
    },
    {
      text: '打電話給小明',
      completed: true,
      isEdit: false
    },
    {
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
