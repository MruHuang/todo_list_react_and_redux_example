import React from 'react';
import ReactDOM from 'react-dom';

const Filter = ({
  onShowAll,
  onShowCompleted
}) => (
  <div>
    <button type="button" onClick={onShowAll}>All</button>
    <button type="button" onClick={onShowCompleted}>Completed</button>
  </div>
);

export default Filter;