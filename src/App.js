



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import TaskDashboard from './pages/TaskDashboard'; // Import TaskDashboard
import TaskDetails from './pages/TaskDetails';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
 // Import TaskDetails
import "./App.scss";
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TaskDashboard />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
};

export default App;

