// // src/components/TaskList.jsx
// import React from 'react';

// const TaskList = ({ tasks, handleComplete, handleDelete }) => {
//   return (
//     <div>
//       <h2>Task List</h2>
//       {tasks.length === 0 ? (
//         <p>No tasks available</p>
//       ) : (
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.id}>
//               <h3>{task.title}</h3>
//               <p>{task.description}</p>
//               <p>{task.id}</p>
//               <p>Due: {task.dueDate}</p>
//               <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
//               <button onClick={() => handleComplete(task.id)}>{task.completed ? 'Completed' : 'Mark as Completed'}</button>
//               <button onClick={() => handleDelete(task.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskList;


// import React from 'react';
// import { useSelector } from 'react-redux';

// const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux store

//   return (
//     <div>
//       {tasks.map((task) => (
//         <div key={task.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
//           <h3>{task.title}</h3>
//           <p>{task.description}</p>
//           <p>Due Date: {task.dueDate}</p>
//           {task.image && <img src={task.image} alt={task.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskList;
// import React from 'react';
// import { Button } from '@mui/material';

// const TaskList = ({ tasks, handleComplete, handleDelete }) => {
//   return (
//     <div>
//       {tasks.length > 0 ? (
//         tasks.map((task) => (
//           <div key={task.id} style={{ marginBottom: '10px' }}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <p>Due: {task.dueDate}</p>
//             <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            
//             {/* Complete and Delete buttons */}
//             <Button 
//               variant="contained" 
//               color="primary" 
//               onClick={() => handleComplete(task.id)}
//               disabled={task.completed}
//             >
//               {task.completed ? 'Completed' : 'Complete'}
//             </Button>
//             <Button 
//               variant="contained" 
//               color="secondary" 
//               onClick={() => handleDelete(task.id)}
//               sx={{ ml: 2 }}
//             >
//               Delete
//             </Button>
//           </div>
//         ))
//       ) : (
//         <p>No tasks available.</p>
//       )}
//     </div>
//   );
// };

// export default TaskList;

import React from 'react';
import { Button } from '@mui/material';

const TaskList = ({ tasks, handleComplete, handleDelete, handleEdit }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} style={{ marginBottom: '10px' }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            

            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => handleComplete(task.id)}
              disabled={task.completed}
            >
              {task.completed ? 'Completed' : 'Complete'}
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => handleDelete(task.id)}
              sx={{ ml: 2 }}
            >
              Delete
            </Button>

            <Button 
              variant="contained" 
              color="default" 
              onClick={() => handleEdit(task.id)} 
              sx={{ ml: 2 }}
            >
              Edit
            </Button>
          </div>
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;