import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@mui/material/Slide';
import {Button} from '@mui/material';
import ProjectPanel from './ProjectPanel';
import PartPanel from './PartPanel';
import NotePanel from './NotePanel';
import TaskPanel from './TaskPanel';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ProjectDialog extends React.Component {
  state = {
    open: false,
    expanded: 'panel-project',
    checked: [0]
  };

    componentDidMount() {
        console.log("ProjectDialog:tasks: " + this.props.tasks)
        console.log("ProjectDialog:Project: " + this.props.match)
    }

  handleClickOpen = () => {
      console.log("handleClickOpen ID: " + this.props.maintainID)
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleToggle = value => () => {
      const { checked } = this.state;
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      this.setState({
        checked: newChecked,
      });
  };

  handleChange = name => (event,expanded) => {
          this.setState({ [name]: event.target.value });
          this.setState({expanded: expanded ? 'panel-project' : false});
      };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open full-screen dialog
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >

          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                  {"project name"}
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
            <ProjectPanel project={{id:0,name:"TestProject",description:"Test Project Description"}} tasks={this.props.tasks}/>
            <TaskPanel     tasks={this.state.tasks}/>
            <NotePanel />
            <PartPanel />
        </Dialog>
      </div>
    );
  }
}

ProjectDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectDialog);
