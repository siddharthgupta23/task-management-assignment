// // src/pages/HomePage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import TaskDashboard from './TaskDashboard'; // Import TaskDashboard

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <header className="home-page__header">
//         <h1>Welcome to Task Management Dashboard</h1>
//         <Link to="/tasks" className="home-page__link">
//           Go to Task Dashboard
//         </Link>
//       </header>
//       <section className="home-page__tasks">
//         <h2>Task Details (View by ID)</h2>
//         <div>
//           {tasks.length > 0 ? (
//             tasks.map((task) => (
//               <div key={task.id}>
//                 <Link to={`/tasks/${task.id}`}>Task {task.id}</Link>
//                 <br />
//               </div>
//             ))
//           ) : (
//             <p>No tasks available.</p>
//           )}
//         </div>
//       </section>
//       <section className="home-page__tasks">
//         <TaskDashboard />
//       </section>
//     </div>
//   );
// };

// export default HomePage;

// src/pages/HomePage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
// import TaskDashboard from './TaskDashboard'; // Import TaskDashboard

// const HomePage = () => {
//   // Get tasks from Redux store
//   const tasks = useSelector((state) => state.tasks.tasks);

//   return (
//     <div className="home-page">
//       <header className="home-page__header">
//         <h1>Welcome to Task Management Dashboard</h1>
//         <Link to="/tasks" className="home-page__link">
//           Go to Task Dashboard
//         </Link>
//       </header>

//       {/* Link for each task by its ID */}
//       <section className="home-page__tasks">
//         <h2>Task Details (View by ID)</h2>
//         <div>
//           {tasks.length > 0 ? (
//             tasks.map((task) => (
//               <div key={task.id}>
//                 <Link to={`/tasks/${task.id}`}>Task {task.id}</Link>
//                 <br />
//               </div>
//             ))
//           ) : (
//             <p>No tasks available.</p>
//           )}
//         </div>
//       </section>

//       <section className="home-page__tasks">
//         <TaskDashboard />
//       </section>
//     </div>
//   );
// };

// export default HomePage;

// src/pages/HomePage.jsx
import React from 'react';
import { Container, Box, Typography, Button, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TaskDashboard from './TaskDashboard'; // Assuming you have TaskDashboard component
import { useSelector } from 'react-redux';

const popularCategories = [
  { id: 1, title: 'Work', description: 'Tasks related to work', image: 'task1.jpg', category: 'work' },
  { id: 2, title: 'Personal', description: 'Personal task management', image: 'task2.png', category: 'personal' },
  { id: 3, title: 'Urgent', description: 'Tasks that need urgent attention', image: 'task3.jpg', category: 'urgent' },
  { id: 4, title: 'Shopping', description: 'Shopping tasks and reminders', image: 'task4.jpg', category: 'shopping' },
];

const HomePage = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <>

      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3">Welcome to Task Manager</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Organize your tasks efficiently and track your progress with ease.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Explore Popular Categories
          </Typography>

          {/* Using Box with Flexbox for layout */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 4,
            }}
          >
            {popularCategories.map((category) => (
              <Box
                key={category.id}
                sx={{
                  flex: '1 1 22%', // Flexbox: Allow items to grow, shrink, and be 22% wide
                  maxWidth: '22%', // Ensure items don't grow too wide
                  minWidth: '220px', // Ensure items don't shrink too much on small screens
                }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={category.image}
                    alt={category.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{category.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" color="primary">Like</Button>
                    <Button size="small" color="secondary">Save</Button>
                    <Button size="small" color="error">Favorite</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Task links */}
        <section className="home-page__tasks">
          <h2>Task Details (View by ID)</h2>
          <div>
            {/* Get tasks from Redux */}
            {/* You need to set up tasks in the Redux store */}
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div key={task.id}>
                  <Link to={`/tasks/${task.id}`}>Task {task.id}</Link>
                  <br />
                </div>
              ))
            ) : (
              <p>No tasks available.</p>
            )}
          </div>
        </section>

        <section className="home-page__tasks">
          <TaskDashboard />
        </section>
      </Container>
    </>
  );
};

export default HomePage;



