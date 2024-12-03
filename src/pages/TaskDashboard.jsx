// src/pages/TaskDashboard.jsx
// src/pages/TaskDashboard.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import TaskList from '../components/TaskList'; // TaskList for showing the list of tasks

// const TaskDashboard = () => {
//   const navigate = useNavigate();

//   const goToTaskDetails = (taskId) => {
//     navigate(`/tasks/${taskId}`);
//   };

//   return (
//     <div className="task-dashboard">
//       <h1 className="task-dashboard__title">Task Management Dashboard</h1>
//       <TaskList goToTaskDetails={goToTaskDetails} />
//     </div>
//   );
// };

// export default TaskDashboard;
// src/pages/TaskDashboard.jsx
// src/pages/TaskDashboard.jsx
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilter, markAsCompleted, deleteTask } from "../redux/reducers";
// import { selectTasksByFilter } from "../redux/selectors";
// import TaskList from "../components/TaskList";
// import TaskForm from "../components/TaskForm";
// import { Box, Button } from "@mui/material";

// const TaskDashboard = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector(selectTasksByFilter); // Get tasks based on the selected filter
//   const [showForm, setShowForm] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Handle task filter change
//   const handleFilterChange = (filter) => {
//     dispatch(setFilter(filter)); // Dispatch filter change action
//   };

//   const handleComplete = (taskId) => {
//     dispatch(markAsCompleted(taskId)); // Dispatch action to mark task as completed
//   };

//   // Handle task deletion
//   const handleDelete = (taskId) => {
//     dispatch(deleteTask(taskId)); // Dispatch action to delete task
//   };

//   // Handle search query
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter tasks by search query
//   const filteredTasks = tasks.filter((task) =>
//     task.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="task-dashboard">
//       <h1>Task Management Dashboard</h1>

//       <Box mb={2}>
//         {/* <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setShowForm(true)}
//         >
//           Add Task
//         </Button> */}
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setShowForm(true)}
//         >
//           Add Task
//         </Button>
//         <input
//           type="text"
//           placeholder="Search tasks by title"
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </Box>

//       {showForm && <TaskForm onClose={() => setShowForm(false)} />}

//       <Box mt={2}>
//         <Button onClick={() => handleFilterChange("all")}>All Tasks</Button>
//         <Button onClick={() => handleFilterChange("completed")}>
//           Completed Tasks
//         </Button>
//         <Button onClick={() => handleFilterChange("pending")}>
//           Pending Tasks
//         </Button>
//         <Button onClick={() => handleFilterChange("overdue")}>
//           Overdue Tasks
//         </Button>
//       </Box>

//       <TaskList
//         tasks={filteredTasks}
//         handleComplete={handleComplete} // Pass the handleComplete function
//         handleDelete={handleDelete} // Pass the handleDelete function
//       />
//     </div>
//   );
// };

// export default TaskDashboard;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter, markAsCompleted, deleteTask } from '../redux/reducers';
// import { selectTasksByFilter } from '../redux/selectors';
// import TaskList from '../components/TaskList';
// import TaskForm from '../components/TaskForm';
// import { Box, Button } from '@mui/material';

// const TaskDashboard = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector(selectTasksByFilter); // Get tasks based on the selected filter
//   const [showForm, setShowForm] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Handle task filter change
//   const handleFilterChange = (filter) => {
//     dispatch(setFilter(filter)); // Dispatch filter change action
//   };

//   const handleComplete = (taskId) => {
//     dispatch(markAsCompleted(taskId)); // Dispatch action to mark task as completed
//   };

//   // Handle task deletion
//   const handleDelete = (taskId) => {
//     dispatch(deleteTask(taskId)); // Dispatch action to delete task
//   };

//   // Handle search query
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter tasks by search query
//   const filteredTasks = tasks.filter((task) =>
//     task.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="task-dashboard">
//       <h1>Task Management Dashboard</h1>

//       <Box mb={2}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setShowForm(true)}
//         >
//           Add Task
//         </Button>
//         <input
//           type="text"
//           placeholder="Search tasks by title"
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </Box>

//       {showForm && <TaskForm onClose={() => setShowForm(false)} />}

//       <Box mt={2}>
//         <Button onClick={() => handleFilterChange('all')}>All Tasks</Button>
//         <Button onClick={() => handleFilterChange('completed')}>Completed Tasks</Button>
//         <Button onClick={() => handleFilterChange('pending')}>Pending Tasks</Button>
//         <Button onClick={() => handleFilterChange('overdue')}>Overdue Tasks</Button>
//       </Box>

//       <TaskList
//         tasks={filteredTasks}
//         handleComplete={handleComplete} // Pass the handleComplete function
//         handleDelete={handleDelete} // Pass the handleDelete function
//       />
//     </div>
//   );
// };

// export default TaskDashboard;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter, markAsCompleted, deleteTask } from '../redux/reducers';
// import { selectTasksByFilter } from '../redux/selectors';
// import TaskList from '../components/TaskList';
// import TaskForm from '../components/TaskForm';
// import { Box, Button, TextField } from '@mui/material';

// const TaskDashboard = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector(selectTasksByFilter); // Get tasks based on the selected filter
//   const [showForm, setShowForm] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Handle task filter change
//   const handleFilterChange = (filter) => {
//     dispatch(setFilter(filter)); // Dispatch filter change action
//   };

//   const handleComplete = (taskId) => {
//     dispatch(markAsCompleted(taskId)); // Dispatch action to mark task as completed
//   };

//   // Handle task deletion
//   const handleDelete = (taskId) => {
//     dispatch(deleteTask(taskId)); // Dispatch action to delete task
//   };

//   // Handle search query
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter tasks by search query
//   const filteredTasks = tasks.filter((task) =>
//     task.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="task-dashboard">
//       <h1>Task Management Dashboard</h1>

//       <Box mb={2}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setShowForm(true)}
//         >
//           Add Task
//         </Button>
//         <TextField
//           label="Search tasks"
//           variant="outlined"
//           value={searchQuery}
//           onChange={handleSearch}
//           sx={{ ml: 2 }}
//         />
//       </Box>

//       {showForm && <TaskForm onClose={() => setShowForm(false)} />}

//       <Box mt={2}>
//         <Button onClick={() => handleFilterChange('all')}>All Tasks</Button>
//         <Button onClick={() => handleFilterChange('completed')}>Completed Tasks</Button>
//         <Button onClick={() => handleFilterChange('pending')}>Pending Tasks</Button>
//         <Button onClick={() => handleFilterChange('overdue')}>Overdue Tasks</Button>
//       </Box>

//       <TaskList
//         tasks={filteredTasks}
//         handleComplete={handleComplete} // Pass the handleComplete function
//         handleDelete={handleDelete} // Pass the handleDelete function
//       />
//     </div>
//   );
// };

// export default TaskDashboard;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, markAsCompleted, deleteTask } from '../redux/reducers';
import { selectTasksByFilter } from '../redux/selectors';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { Box, Button, TextField } from '@mui/material';

const TaskDashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasksByFilter); // Get tasks based on the selected filter
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskBeingEdited, setTaskBeingEdited] = useState(null); // Track the task being edited

  // Handle task filter change
  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter)); // Dispatch filter change action
  };

  const handleComplete = (taskId) => {
    dispatch(markAsCompleted(taskId)); // Dispatch action to mark task as completed
  };

  // Handle task deletion
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch action to delete task
  };

  // Handle task editing
  const handleEdit = (taskId) => {
    setTaskBeingEdited(taskId); // Set the task being edited
    setShowForm(true); // Show the form when editing a task
  };

  // Handle search query
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter tasks by search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="task-dashboard">
      <h1>Task Management Dashboard</h1>

      <Box mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setShowForm(true);
            setTaskBeingEdited(null); // Reset taskBeingEdited when adding a new task
          }}
        >
          Add Task
        </Button>
      
        <TextField
          label="Search tasks"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          sx={{ ml: 2 }}
        />
      </Box>

      {/* Show TaskForm for adding or editing a task */}
      {showForm && (
        <TaskForm 
          onClose={() => {
            setShowForm(false);
            setTaskBeingEdited(null); // Reset taskBeingEdited when closing the form
          }} 
          initialTaskId={taskBeingEdited} // Pass the taskBeingEdited as initialTaskId
        />
      )}

      <Box mt={2}>
        <Button onClick={() => handleFilterChange('all')}>All Tasks</Button>
        <Button onClick={() => handleFilterChange('completed')}>Completed Tasks</Button>
        <Button onClick={() => handleFilterChange('pending')}>Pending Tasks</Button>
        <Button onClick={() => handleFilterChange('overdue')}>Overdue Tasks</Button>
      </Box>

      {/* Pass handleEdit to TaskList */}
      <TaskList
        tasks={filteredTasks}
        handleComplete={handleComplete} // Pass the handleComplete function
        handleDelete={handleDelete} // Pass the handleDelete function
        handleEdit={handleEdit} // Pass the handleEdit function
      />
    </div>
  );
};

export default TaskDashboard;