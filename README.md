# Task Management Dashboard

This is a **Task Management Dashboard** built using **React**, **Redux Toolkit**, and **React Router**. The application allows users to manage tasks, including features like adding, editing, deleting, marking tasks as completed, and filtering tasks based on status (completed, pending, overdue). The application is fully responsive and works on both desktop and mobile devices.

## Features
- **Add Task**: Allows users to add tasks with a title, description, and due date.
- **Edit Task**: Users can edit existing tasks.
- **Delete Task**: Users can delete tasks from the task list.
- **Mark as Completed**: Users can mark tasks as completed.
- **Task Filters**: Filter tasks by status (All Tasks, Completed Tasks, Pending Tasks, Overdue Tasks).
- **Responsive Design**: The app is fully responsive and adapts to mobile and desktop screens.
- **Task Details**: View detailed information of individual tasks.

## Technologies Used
- **React** (JavaScript ES6+)
- **Redux Toolkit** for state management
- **React Router** for navigation
- **CSS/SCSS** for styling (Responsive design)
- **Material UI** or **Styled Components** for UI components (optional)

## Project Structure

Below is the overall folder structure of the project:
elow is the overall folder structure of the project:

task-management-dashboard/ ├── src/ │ ├── components/ │ │ ├── TaskCard.js # Component for displaying individual tasks │ │ ├── TaskList.js # Component for displaying list of tasks │ │ ├── TaskFilters.js # Component for filtering tasks │ ├── pages/ │ │ ├── HomePage.jsx # Home page with TaskDashboard link │ │ ├── TaskDashboard.jsx # Dashboard for task management │ │ ├── TaskDetails.jsx # Detailed task view page │ ├── redux/ │ │ ├── reducers.js # Redux reducers for managing tasks and filters │ ├── App.js # Main app component with routing setup │ ├── index.js # Entry point for the React application │ ├── index.css # Global CSS for styling

### Breakdown of Components:
1. **`TaskCard.js`**:
   - Displays a single task's details (title, description, due date, and status).
   - Allows users to mark a task as completed or delete it.
   
2. **`TaskList.js`**:
   - Renders the list of tasks, filtering them based on the selected filter (all, completed, pending, overdue).
   - Uses the `TaskCard` component to display each task.

3. **`TaskFilters.js`**:
   - Provides the UI for filtering tasks by their status (All Tasks, Completed, Pending, Overdue).
   - Updates the Redux state with the selected filter.

4. **`HomePage.jsx`**:
   - The landing page of the app.
   - Contains a welcome message and a link to the Task Dashboard.

5. **`TaskDashboard.jsx`**:
   - Displays the task list and the TaskFilters component.
   - Allows users to view tasks and navigate to individual task details.

6. **`TaskDetails.jsx`**:
   - Displays detailed information for a specific task.
   - Allows users to navigate back to the Task Dashboard.

7. **`reducers.js`**:
   - Contains Redux reducers that manage the task data, including adding, deleting, editing, and filtering tasks.

8. **`App.js`**:
   - Configures the routes for the application using React Router.
   - Routes:
     - `/`: Home Page
     - `/tasks`: Task Dashboard
     - `/tasks/:id`: Task Details Page

9. **`index.js`**:
   - The entry point for the React application.
   - Sets up the **Redux provider** and **Router** for the app.

10. **`index.css`**:
    - Global styles for the application, including responsive layout.

## Setup & Installation

### Prerequisites

Ensure that you have **Node.js** and **npm** (Node Package Manager) installed. You can download and install them from [Node.js official website](https://nodejs.org/).

### Steps to Run the Project Locally

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**:
   Open your terminal and clone the repository from GitHub:

   ```bash
   git clone 
   cd task-management-dashboard
   Install Dependencies: Install the required dependencies using npm:


npm install
Start the Development Server: Once the dependencies are installed, start the development server:


npm start


