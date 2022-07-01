import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

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
 * @param {object}  "classes":{
                      "root":"MainAppBar-root-108",
                      "grow":"MainAppBar-grow-109",
                      "menuButton":"MainAppBar-menuButton-110"},
                      "authedUser":"Admin",
                      "pro"
                    }
 */

function MainAppBar(props) {
  const { classes, authedUser,activeProject } = props;
  console.log("MainAppBar::activeProject: " + JSON.stringify(activeProject));
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Project: {props.location}
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
  classes: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired,
  activeProject: PropTypes.object.isRequired,
  location: PropTypes.string
};

export default withStyles(styles)(MainAppBar)
