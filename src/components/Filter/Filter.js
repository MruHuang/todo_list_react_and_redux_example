import React from 'react';
import ReactDOM from 'react-dom';

const Filter = ({
  onShowAll,
  onShowCompleted
}) => (
  <div>
    <button type="button" onClick={onShowAll}>all</button>
    <button type="button" onClick={onShowCompleted}>completed</button>
  </div>
);

export default Filter;