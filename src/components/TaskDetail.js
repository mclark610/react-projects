import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import { Grid, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import PartList from './PartList';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  taskName: {
    backgroundColor: "green",
    width:"80%",
    paddingLeft: "20px",
    marginLeft: "20px",
    textAlign:"left",
  },
  taskDescription: {
    backgroundColor: "yellow",
    width:"80%",
    paddingLeft: "20px",
    marginLeft: "20px",
    textAlign:"left",
    
  },
  taskNotes: {
    backgroundColor: "red",
    width:"80%",
    paddingLeft: "20px",
    marginLeft: "20px",
    textAlign:"left",
  },
  taskParts: {
    backgroundColor: "#ffdcf2",
    width:"80%",
    paddingLeft: "20px",
    marginLeft: "20px",
    textAlign:"left",
  },
});

class TaskDetail extends React.Component {
  state = {
    open: false,
    expanded: 'panel-project',
    checked: [0]
  };

  componentDidMount() {
    console.log("TaskDetail:tasks: " + this.props.tasks)
    console.log("TaskDetail:Project: " + this.props.match)
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

  handleChange = name => (event, expanded) => {
    this.setState({ [name]: event.target.value });
    this.setState({ expanded: expanded ? 'panel-project' : false });
  };

  render() {
    const { classes, parts } = this.props;
    return (
      <div>
      <section>
        <h2>This is where the task detail lives</h2>
        <Grid container  spacing={2}>
          <Grid  className={classes.taskName} item xs={8} >
            <TextField className={classes.taskName} variant="outlined" placeholder="Task Name" />
          </Grid>
          <Grid item xs={1}>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} label="Active" />
            </FormGroup>
          </Grid>
          <Grid item className={classes.taskDescription} xs={10} >
            <TextField multiline variant="outlined" outlined maxRows={4} minRows={4} className={classes.taskDescription} placeholder="Task Description"></TextField>
          </Grid>
        </Grid>
        </section>
        <section>
        <Grid container  spacing={2}>
          <Grid item xs={8}>
            Notes
          </Grid>
          <Grid item className={classes.taskNotes} spacing={8} xs={10}>
            <TextField multiline variant="outlined" minRows={8} className={classes.taskNotes} placeholder="Notes"></TextField>
          </Grid>
        </Grid>
        </section>

        <section>
        <Grid container  spacing={2}>
          <Grid item xs={8}>
            Part List
          </Grid>
          <Grid item className={classes.taskParts} spacing={8} xs={10}>
            <PartList parts={parts}/>
          </Grid>
        </Grid>
        </section>

        <ul>
          <li><strike>Task Name</strike></li>
          <li><strike>Task Description</strike></li>
          <li><strike>Open Closed</strike></li>
          <li><strike>Notes</strike></li>
          <li>Parts List</li>
        </ul>

      </div>
    );
  }
}

TaskDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(TaskDetail));
