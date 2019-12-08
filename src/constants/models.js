import Immutable from 'immutable';

export const TodoState = Immutable.fromJS({
  'todos': [
    {
      text: '第一個REACT程式',
      completed: false,
      isEdit: false,
      date: '2019-01-05'
    },
    {
      text: '測試',
      completed: true,
      isEdit: false,
      date: '2019-01-05'
    },
    {
      text: '面試中~',
      completed: false,
      isEdit: false,
      date: '2019-01-05'
    }
  ],
  'todo': {
    text: '',
    completed: false,
    isEdit: false,
    date: '0000-00-00'
  },
  'select': 
    {
      completed: false,
      index: 0
    }
  ,
  filter: 'show_all'
});
