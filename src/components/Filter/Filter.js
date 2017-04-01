import React from 'react';
import ReactDOM from 'react-dom';

const Filter = ({
  onShowAll,
  onShowCompleted
}) => (
  <div>
    <button type="button" onClick={onShowAll}>全部</button>
    <button type="button" onClick={onShowCompleted}>已完成</button>
  </div>
);

export default Filter;