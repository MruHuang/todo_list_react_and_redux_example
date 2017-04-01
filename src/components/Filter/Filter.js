import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';

const Filter = ({
  onShowAll,
  onShowCompleted
}) => (
  <div>
    <Button onClick={onShowAll}>全部</Button>
    <Button onClick={onShowCompleted}>已完成</Button>
  </div>
);

export default Filter;