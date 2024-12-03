// src/redux/selectors.js
// src/redux/selectors.js
import dayjs from 'dayjs';

export const selectTaskById = (state, taskId) => {
    
    return state.tasks.tasks.find(task => task.id === taskId); 
    
  };
  
  

export const selectTasksByFilter = (state) => {
  const { tasks, filter } = state.tasks;
  const currentDate = dayjs(); 

  switch (filter) {
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'pending':
      return tasks.filter(task => !task.completed);
    case 'overdue':
      return tasks.filter(task => {
        return dayjs(task.dueDate).isBefore(currentDate) && !task.completed;
      });
    default:
      return tasks; // 'all' filter
  }
};
