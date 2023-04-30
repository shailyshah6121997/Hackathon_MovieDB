import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export function HeaderHome() {
    return(
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie DB
          </Typography>
            <Link to="/new">New Releases</Link>&nbsp;
            <Link to="/hot">What's Hot</Link>
        </Toolbar>
      </AppBar>
    </Box>);
}