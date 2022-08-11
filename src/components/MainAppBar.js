import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom'

import {css, cx} from '@emotion/react';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

/**
 * @function MainAppBar
 * @description Beginning of application. Please see README.md
 * @param {object}  "styles":{
                      "root":"MainAppBar-root-108",
                      "grow":"MainAppBar-grow-109",
                      "menuButton":"MainAppBar-menuButton-110"},
                      "authedUser":"Admin",
                      "pro"
                    }
 */

function MainAppBar(props) {
  const { authedUser,activeProject } = props;
  console.log("MainAppBar::activeProject: " + JSON.stringify(activeProject));
  const color="green";

  return (
  <div /*className={styles.root}*/> 
      <AppBar position="static">
        <Toolbar>
          <IconButton /*className={styles.menuButton}*/ color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" /*className={styles.grow}*/>
            Project
          </Typography>
          <Button
            component={NavLink}
            to="/login"
            id="btnLogin"
            variant="outlined"
            color="secondary"
          >{authedUser ? authedUser : 'Login'}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MainAppBar.propTypes = {
  authedUser: PropTypes.string.isRequired,
  activeProject: PropTypes.object.isRequired
};

export default MainAppBar
