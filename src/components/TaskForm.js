// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../redux/reducers';
// import { TextField, Button, Box } from '@mui/material';

// const TaskForm = ({ onClose }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title && description && dueDate) {
//       const newTask = {
//         id: Date.now(), 
//         title,
//         description,
//         dueDate,
//         completed: false,
//       };
//       dispatch(addTask(newTask));
//       onClose(); // Close the form after submission
//     }
//   };

//   return (
//     <Box>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Title"
//           variant="outlined"
//           fullWidth
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           margin="normal"
//         />
//         <TextField
//           label="Description"
//           variant="outlined"
//           fullWidth
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           margin="normal"
//         />
//         <TextField
//           label="Due Date"
//           type="date"
//           variant="outlined"
//           fullWidth
//           value={dueDate}
//           onChange={(e) => setDueDate(e.target.value)}
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Add Task
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default TaskForm;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTask } from '../redux/reducers'; // Import the addTask action
// import { Button, TextField, FormControl, FormHelperText } from '@mui/material'; // Use Material-UI for styling

// const TaskForm = ({ onClose }) => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux store
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [taskId, setTaskId] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if taskId is unique
//     const isTaskIdUnique = !tasks.some((task) => task.id === taskId);

//     if (!isTaskIdUnique) {
//       setError('Task ID must be unique.');
//       return;
//     }

//     if (title && description && dueDate && taskId) {
//       // Dispatch the action to add a task
//       dispatch(
//         addTask({
//           id: taskId, // Use the provided task ID
//           title,
//           description,
//           dueDate,
//           completed: false,
//         })
//       );
//       onClose(); // Close the form
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="task-form">
//       <TextField
//         label="Task ID"
//         value={taskId}
//         onChange={(e) => setTaskId(e.target.value)}
//         fullWidth
//         required
//         error={!!error}
//         helperText={error}
//         style={{ marginBottom: '15px' }}
//       />
//       <TextField
//         label="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         fullWidth
//         required
//         style={{ marginBottom: '15px' }}
//       />
//       <TextField
//         label="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         fullWidth
//         required
//         style={{ marginBottom: '15px' }}
//       />
//       <TextField
//         label="Due Date"
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         fullWidth
//         required
//         InputLabelProps={{
//           shrink: true,
//         }}
//         style={{ marginBottom: '15px' }}
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Add Task
//       </Button>
//     </form>
//   );
// };

// export default TaskForm;

// 
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTask } from '../redux/reducers'; // Import the addTask action
// import { Button, TextField } from '@mui/material'; // Use Material-UI for styling

// const TaskForm = ({ onClose }) => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux store
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [taskId, setTaskId] = useState('');
//   const [image, setImage] = useState(null); // State to store the uploaded image
//   const [error, setError] = useState('');

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImage(reader.result); // Save the base64 string of the image
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isTaskIdUnique = !tasks.some((task) => task.id === parseInt(taskId));

//     if (!taskId || isNaN(taskId) || parseInt(taskId) <= 0) {
//       setError('Task ID must be a valid positive integer.');
//       return;
//     }

//     if (!isTaskIdUnique) {
//       setError('Task ID must be unique.');
//       return;
//     }

//     if (title && description && dueDate && taskId) {
//       // Dispatch the action to add a task
//       dispatch(
//         addTask({
//           id: parseInt(taskId),
//           title,
//           description,
//           dueDate,
//           image, // Add the image to the task
//           completed: false,
//         })
//       );
//       onClose();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Task ID"
//         value={taskId}
//         onChange={(e) => {
//           const value = e.target.value;
//           if (!isNaN(value) && value >= 0) {
//             setTaskId(value);
//           }
//         }}
//         fullWidth
//         required
//         error={!!error}
//         helperText={error}
//         style={{ marginBottom: '15px' }}
//       />

//       <TextField
//         label="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         fullWidth
//         required
//         style={{ marginBottom: '15px' }}
//       />

//       <TextField
//         label="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         fullWidth
//         required
//         multiline
//         rows={4}
//         style={{ marginBottom: '15px' }}
//       />

//       <TextField
//         label="Due Date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         fullWidth
//         required
//         type="date"
//         InputLabelProps={{
//           shrink: true,
//         }}
//         style={{ marginBottom: '15px' }}
//       />

//       <Button
//         variant="contained"
//         component="label"
//         style={{ marginBottom: '15px' }}
//       >
//         Upload Image
//         <input
//           type="file"
//           accept="image/*"
//           hidden
//           onChange={handleImageUpload}
//         />
//       </Button>
//       {image && (
//         <img
//           src={image}
//           alt="Task Preview"
//           style={{
//             display: 'block',
//             marginBottom: '15px',
//             width: '100px',
//             height: '100px',
//             objectFit: 'cover',
//           }}
//         />
//       )}
//       <br></br>

//       <Button type="submit" variant="contained" color="primary">
//         Add Task
//       </Button>
//     </form>
//   );
// };

// export default TaskForm;

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTask, editTask } from '../redux/reducers'; // Import the addTask and editTask actions
// import { Button, TextField } from '@mui/material'; // Use Material-UI for styling

// const TaskForm = ({ onClose, initialTaskId }) => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux store
//   const [taskId, setTaskId] = useState(initialTaskId || ''); // Local state for taskId
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [image, setImage] = useState(null); // State to store the uploaded image
//   const [error, setError] = useState('');
//   const [isEditing, setIsEditing] = useState(false);

//   // If taskId is provided, we're editing an existing task
//   useEffect(() => {
//     if (initialTaskId) {
//       const taskToEdit = tasks.find((task) => task.id === initialTaskId);
//       if (taskToEdit) {
//         setTaskId(taskToEdit.id); // Set local taskId state
//         setTitle(taskToEdit.title);
//         setDescription(taskToEdit.description);
//         setDueDate(taskToEdit.dueDate);
//         setImage(taskToEdit.image);
//         setIsEditing(true);
//       }
//     }
//   }, [initialTaskId, tasks]);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImage(reader.result); // Save the base64 string of the image
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Convert taskId to number (since taskId comes as string)
//     const taskIdNumber = taskId ? parseInt(taskId, 10) : null;

//     // Validate task ID if adding a new task (only if not editing)
//     if (!isEditing) {
//       if (!taskIdNumber || isNaN(taskIdNumber) || taskIdNumber <= 0) {
//         setError('Task ID must be a valid positive integer.');
//         return;
//       }

//       // Check if task ID is unique
//       const isTaskIdUnique = !tasks.some((task) => task.id === taskIdNumber);
//       if (!isTaskIdUnique) {
//         setError('Task ID must be unique.');
//         return;
//       }
//     }

//     // If editing, dispatch editTask
//     if (isEditing) {
//       dispatch(
//         editTask({
//           id: taskIdNumber,
//           updates: {
//             title,
//             description,
//             dueDate,
//             image,
//           },
//         })
//       );
//     } else {
//       // Dispatch addTask if we're adding a new task
//       dispatch(
//         addTask({
//           id: taskIdNumber,
//           title,
//           description,
//           dueDate,
//           image,
//           completed: false,
//         })
//       );
//     }

//     onClose(); // Close the form after submission
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Task ID"
//         value={taskId || ''}  // Make sure to display taskId as string, and handle empty cases
//         fullWidth
//         required
//         error={!!error}
//         helperText={error}
//         style={{ marginBottom: '15px' }}
//         disabled={isEditing} // Disable ID field when editing (only for existing task)
//         onChange={(e) => setTaskId(e.target.value)} // Use local state setter
//       />

//       <TextField
//         label="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         fullWidth
//         required
//         style={{ marginBottom: '15px' }}
//       />

//       <TextField
//         label="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         fullWidth
//         required
//         multiline
//         rows={4}
//         style={{ marginBottom: '15px' }}
//       />

//       <TextField
//         label="Due Date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         full Width
//         required
//         type="date"
//         InputLabelProps={{
//           shrink: true,
//         }}
//         style={{ marginBottom: '15px' }}
//       />

//       <Button
//         variant="contained"
//         component="label"
//         style={{ marginBottom: '15px' }}
//       >
//         Upload Image
//         <input
//           type="file"
//           accept="image/*"
//           hidden
//           onChange={handleImageUpload}
//         />
//       </Button>
//       {image && (
//         <img
//           src={image}
//           alt="Task Preview"
//           style={{
//             display: 'block',
//             marginBottom: '15px',
//             width: '100px',
//             height: '100px',
//             objectFit: 'cover',
//           }}
//         />
//       )}
//       <br />

//       <Button type="submit" variant="contained" color="primary">
//         {isEditing ? 'Update Task' : 'Add Task'}
//       </Button>
//     </form>
//   );
// };

// export default TaskForm;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../redux/reducers'; // Import the addTask and editTask actions
import { Button, TextField } from '@mui/material'; // Use Material-UI for styling

const TaskForm = ({ onClose, initialTaskId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux store
  const [taskId, setTaskId] = useState(initialTaskId || ''); // Local state for taskId
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [image, setImage] = useState(null); // State to store the uploaded image
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // If initialTaskId is provided, we're editing an existing task
  useEffect(() => {
    if (initialTaskId) {
      const taskToEdit = tasks.find((task) => task.id === initialTaskId);
      if (taskToEdit) {
        setTaskId(taskToEdit.id); // Set local taskId state
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
        setDueDate(taskToEdit.dueDate);
        setImage(taskToEdit.image);
        setIsEditing(true);
      }
    }
  }, [initialTaskId, tasks]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Save the base64 string of the image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert taskId to number (since taskId comes as string)
    const taskIdNumber = taskId ? parseInt(taskId, 10) : null;

    // Validate task ID if adding a new task (only if not editing)
    if (!isEditing) {
      if (!taskIdNumber || isNaN(taskIdNumber) || taskIdNumber <= 0) {
        setError('Task ID must be a valid positive integer.');
        return;
      }

      // Check if task ID is unique
      const isTaskIdUnique = !tasks.some((task) => task.id === taskIdNumber);
      if (!isTaskIdUnique) {
        setError('Task ID must be unique.');
        return;
      }
    }

    // If editing, dispatch editTask
    if (isEditing) {
      dispatch(
        editTask({
          id: taskIdNumber,
          updates: {
            title,
            description,
            dueDate,
            image,
          },
        })
      );
    } else {
      // Dispatch addTask if we're adding a new task
      dispatch(
        addTask({
          id: taskIdNumber,
          title,
          description,
          dueDate,
          image,
          completed: false,
        })
      );
    }

    onClose(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task ID"
        value={taskId || ''}  // Make sure to display taskId as string, and handle empty cases
        fullWidth
        required
        error={!!error}
        helperText={error}
        style={{ marginBottom: '15px' }}
        disabled={isEditing} // Disable ID field when editing (only for existing task)
        onChange={(e) => setTaskId(e.target.value)} // Use local state setter
      />

      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
        style={{ marginBottom: '15px' }}
      />

      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        required
        multiline
        rows={4}
        style={{ marginBottom: '15px' }}
      />

      <TextField
        label="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        fullWidth
        required
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        style={{ marginBottom: '15px' }}
      />

      <Button
        variant="contained"
        component="label"
        style={{ marginBottom: '15px' }}
      >
        Upload Image
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
        />
      </Button>
      {image && (
        <img
          src={image}
          alt="Task Preview"
          style={{
            display: 'block',
            marginBottom: '15px',
            width: '100px',
            height: '100px',
            objectFit: 'cover',
          }}
        />
      )}
      <br />

      <Button type="submit" variant="contained" color="primary">
        {isEditing ? 'Update Task' : 'Add Task'}
      </Button>
    </form>
  );
};

export default TaskForm;