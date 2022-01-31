import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import { Grid, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import PartList from './PartList';

const styles = () => ({
  taskName: {
    width: "80%",
    paddingTop: "20px",
    marginBottom: "4px",
  },
  taskActive: {
    paddingTop: "10px",
    marginBottom: "4px",
    display: 'inline-flex',
  },
  taskDescription: {
    width: "80%",
  },
  taskNotes: {
    width: "80%",
    textAlign: "left",
  },
  taskPartList: {
  },
  gridBorder: {
    border: "1px solid grey"
  }
});

/**
 * @component 
 * @description Form for crud actions on a task.
 * @param {array} parts - parts list that is required for task completion
 * 
 */

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectParts: []
    } 
  }

  handleAddPart = (part) => {
    console.log("AddTask::handleAddPart::part: " + JSON.stringify(part))
  }

  componentDidMount() {
    console.log("AddTask::componentDidMount:props: " + JSON.stringify(this.props));
  }

  render() {
    const { classes,activeProject } = this.props;
    

    return (
      <Grid container spacing={0} className={classes.gridBorder} >

        <Grid item className={classes.gridBorder + ' ' + classes.taskActive} xs={8}>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Active" />
          </FormGroup>
        </Grid>

        <Grid item className={classes.gridBorder} xs={8} >
          <TextField className={classes.taskName} variant="outlined" placeholder="Task Name" />
        </Grid>
        <Grid item className={classes.gridBorder} xs={8} >
          <TextField multiline variant="outlined" maxRows={4} minRows={4} className={classes.taskDescription} placeholder="Task Description"></TextField>
        </Grid>

        <Grid item xs={8} className={classes.gridBorder}>
          Notes
        </Grid>

        <Grid item className={classes.gridBorder} xs={8}>
          <TextField multiline variant="outlined" minRows={8} className={classes.taskNotes} placeholder="Notes"></TextField>
        </Grid>

        <Grid item xs={8} className={classes.gridBorder}>
          Part List
        </Grid>

        <Grid item xs={12} className={classes.gridBorder + ' ' + classes.taskPartList}>
          <PartList parts={this.state.projectParts} activeProject={activeProject} addPart={this.handleAddPart}/>
        </Grid>
      </Grid>
    );
  }
}

AddTask.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
};

export default withStyles(styles)(withRouter(AddTask));
