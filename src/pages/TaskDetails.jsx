// // src/pages/TaskDetails.jsx
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const TaskDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   // Get the task from the Redux store using the ID
//   const task = useSelector(state =>
//     state.tasks.tasks.find(task => task.id === id)
//   );

//   if (!task) {
//     return <div>Task not found!</div>;
//   }

//   return (
//     <div className="task-details">
//       <button className="task-details__back-button" onClick={() => navigate('/tasks')}>
//         Back to Dashboard
//       </button>
//       <h1>{task.title}</h1>
//       <p>{task.description}</p>
//       <p><strong>Due Date:</strong> {task.dueDate}</p>
//       <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}</p>
//     </div>
//   );
// };

// export default TaskDetails;
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { selectTaskById } from '../redux/selectors';

// const TaskDetails = () => {
//   const { id } = useParams(); // Get task ID from URL
 
//   const task = useSelector((state) => selectTaskById(state, parseInt(id, 10))); // Fetch task by ID

//   if (!task) {
//     return <div>Task not found</div>;
//   }

//   return (
//     <div className="task-details">
//       <h2>{task.title}</h2>
//       <p>{task.description}</p>
//       <p>Due Date: {task.dueDate}</p>
//       <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
//     </div>
//   );
// };

// export default TaskDetails;
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const TaskDetails = () => {
  const { id } = useParams(); // Get task ID from URL params
//   const task = useSelector(state => selectTaskById(state, id)); // Get task by ID from Redux store
  const task = useSelector((state) =>
  state.tasks.tasks.find((task) => task.id === parseInt(id)) // Find task by ID
);
  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div>
      <h2>Task Details</h2>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
};

export default TaskDetails;
