import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Grid, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import PartListPanel from './PartListPanel';
import { useParams } from 'react-router-dom';

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
  },
  lastRow: {
    marginBottom: "10px"
  },
  lastContainer: {
    display: 'inline-flex',
  }

});

/**
 * @component 
 * @description Form for crud actions on a task.
 * @param {array} parts - parts list that is required for task completion
 * 
 */

const TaskDetail = (props) => {
  let { id } = useParams();

  console.log("TaskDetail::props: " + JSON.stringify(props));
  console.log("TaskDetail::id: " + JSON.stringify(id));

  useEffect( () => {
    props.handleLocation("Task Detail")

  })

  const { classes, parts, activeProject, tasks } = props;
  const currentTask = tasks[id];
  console.log("TaskDetail::currentTask: " + JSON.stringify(currentTask));
  return (
    <Grid container spacing={0} className={classes.gridBorder} >

      <Grid item className={classes.gridBorder + ' ' + classes.taskActive} xs={8}>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Active" />
        </FormGroup>
      </Grid>

      <Grid item className={classes.gridBorder} xs={8} >
        <TextField className={classes.taskName} variant="outlined" placeholder="Task Name" value={currentTask.name} />
      </Grid>
      <Grid item className={classes.gridBorder} xs={8} >
        <TextField multiline variant="outlined" maxRows={4} minRows={4} className={classes.taskDescription} value={currentTask.description} placeholder="Task Description"></TextField>
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
        <PartListPanel parts={parts} activeProject={activeProject} activeTask={currentTask} />
      </Grid>

      <Grid container >
        <Grid item xs={4} class={classes.gridBorder+ ' ' + classes.lastRow}>button 1</Grid>
        <Grid item xs={4} class={classes.gridBorder+ ' ' + classes.lastRow}>button 2</Grid>
        <Grid item xs={4} class={classes.gridBorder+ ' ' + classes.lastRow}>button 3</Grid>
      </Grid>
    </Grid>
  );
}

TaskDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
};

export default withStyles(styles)(TaskDetail);
