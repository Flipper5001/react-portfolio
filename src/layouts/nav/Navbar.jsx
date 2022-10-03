import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#901927'}}>
        <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Filipe Franzoni
            </Typography>
        <Button color="inherit">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography color="white" underline="none">
                About Me
              </Typography>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/portfolio" style={{ textDecoration: 'none' }}>
              <Typography color="white" underline="none">
                My Portfolio
              </Typography>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Typography color="white" underline="none">
                Contact Me
              </Typography>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/resume" style={{ textDecoration: 'none' }}>
              <Typography color="white" underline="none">
                Resume
              </Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
} 