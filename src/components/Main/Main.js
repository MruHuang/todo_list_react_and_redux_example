import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import FilterContainer from '../../containers/FilterContainer';

const Main = () => (
  <div>
    <TodoHeaderContainer />
    <TodoListContainer />
    <FilterContainer />
  </div>
);

export default Main;