// // src/redux/reducers.js
// import { createSlice } from '@reduxjs/toolkit';

// // Define initial state
// const initialState = {
//   tasks: [],
//   filter: 'all', // 'all', 'completed', 'pending', 'overdue'
// };

// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask(state, action) {
//       state.tasks.push(action.payload); // Add task to tasks array
//     },
//     editTask(state, action) {
//       const { id, updates } = action.payload;
//       const task = state.tasks.find((task) => task.id === id);
//       if (task) {
//         Object.assign(task, updates); // Update task with new values
//       }
//     },
//     deleteTask(state, action) {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//     markAsCompleted(state, action) {
//       const task = state.tasks.find((task) => task.id === action.payload);
//       if (task) task.completed = true;
//     },
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const {
//   addTask,
//   editTask,
//   deleteTask,
//   markAsCompleted,
//   setFilter,
// } = taskSlice.actions;

// export default taskSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// // Define initial state
// const initialState = {
//   tasks: [],
//   filter: 'all', // 'all', 'completed', 'pending', 'overdue'
// };

// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask(state, action) {
//       const newTask = { ...action.payload, id: Date.now() }; // Assign unique ID based on timestamp
//       state.tasks.push(newTask);
//     },
//     editTask(state, action) {
//       const { id, updates } = action.payload;
//       const index = state.tasks.findIndex(task => task.id === id);
//       if (index !== -1) {
//         state.tasks[index] = { ...state.tasks[index], ...updates };
//       }
//     },
//     deleteTask(state, action) {
//       state.tasks = state.tasks.filter(task => task.id !== action.payload);
//     },
//     markAsCompleted(state, action) {
//       const task = state.tasks.find(task => task.id === action.payload);
//       if (task) task.completed = true;
//     },
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addTask, editTask, deleteTask, markAsCompleted, setFilter } = taskSlice.actions;

// export default taskSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  tasks: [ { id: 1, title: 'Task 1', description: 'Description 1',dueDate:'24-09-25', completed: false,image:'task1.jpg' },
  { id: 2, title: 'Task 2', description: 'Description 2',dueDate:'24-10-25', completed: true,image: 'task2.png' },],
  filter: 'all', // 'all', 'completed', 'pending', 'overdue'
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      addTask(state, action) {
        state.tasks.push(action.payload);
      },
      editTask(state, action) {
        const { id, updates } = action.payload;
        const index = state.tasks.findIndex((task) => task.id === id);
        if (index !== -1) {
          state.tasks[index] = { ...state.tasks[index], ...updates };
        }
      },
      deleteTask(state, action) {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      },
      markAsCompleted(state, action) {
        const task = state.tasks.find((task) => task.id === action.payload);
        if (task) task.completed = true;
      },
      setFilter(state, action) {
        state.filter = action.payload;
      },
    },
  });
  
  export const { addTask, editTask, deleteTask, markAsCompleted, setFilter } = taskSlice.actions;
  
  export default taskSlice.reducer;

