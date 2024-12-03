import React from 'react';
import { useDispatch } from 'react-redux';
import { markAsCompleted, deleteTask } from '../redux/reducers';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleComplete = () => {
    dispatch(markAsCompleted(task.id));
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>ID: {task.id}</p> 
      <button onClick={handleComplete} disabled={task.completed}>
        {task.completed ? 'Completed' : 'Mark as Completed'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskCard;

