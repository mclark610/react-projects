import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom'
import Box from '@mui/material/Box';

/**
 * @function MainAppBar
 * @description Log in user if username password is correct.
 * @param {functon} setAuthedUser
 */

function MainAppBar(props) {
  const { authedUser,activeProject } = props;
  console.log("MainAppBar::activeProject: " + JSON.stringify(activeProject));
  
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            Projects
          </Typography>
        <Button
          component={NavLink}
          to="/login"
          id="btnLogin"
          variant="outlined"
          color="secondary"
        >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

MainAppBar.propTypes = {
  authedUser: PropTypes.string.isRequired,
  activeProject: PropTypes.object.isRequired
};

export default MainAppBar
