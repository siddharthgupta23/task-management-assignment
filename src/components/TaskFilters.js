import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducers';

const TaskFilters = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="task-filters">
      <button value="all" onClick={handleFilterChange}>All Tasks</button>
      <button value="completed" onClick={handleFilterChange}>Completed Tasks</button>
      <button value="pending" onClick={handleFilterChange}>Pending Tasks</button>
      <button value="overdue" onClick={handleFilterChange}>Overdue Tasks</button>
    </div>
  );
};

export default TaskFilters;
