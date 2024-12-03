// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Button, Container, Box, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem>
          <Button component={Link} to="/" sx={{ color: 'black' }}>Home</Button>
        </ListItem>
        <ListItem>
          <Button component={Link} to="/about" sx={{ color: 'black' }}>About</Button>
        </ListItem>
        <ListItem>
          <Button component={Link} to="/login" sx={{ color: 'black' }}>Login</Button>
        </ListItem>
        <ListItem>
          <Button component={Link} to="/signup" sx={{ color: 'black' }}>Sign Up</Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white' }}>
                Task Manager
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Button component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
                  <Button component={Link} to="/about" sx={{ color: 'white' }}>About</Button>
                  <Button component={Link} to="/login" sx={{ color: 'white' }}>Login</Button>
                  <Button component={Link} to="/signup" sx={{ color: 'white' }}>Sign Up</Button>
                </Box>
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
                    
