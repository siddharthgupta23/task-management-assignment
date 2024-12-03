
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4">About Task Manager</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Task Manager helps you organize your tasks, track your progress, and achieve your goals efficiently. It provides easy-to-use tools for managing both personal and work-related tasks, with a clean and user-friendly interface.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
