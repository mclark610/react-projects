import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

import { Grid, FormGroup, FormControlLabel, Switch,Button } from '@material-ui/core';
import PartListPanel from './PartListPanel';

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
  saveButtons: {
    marginTop: "5%",
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

function AddTask(props) {
  const {classes,activeProject} = props;
  const [projectParts,setProjectParts] = useState([])

  const [id,setID] = useState(-1);
  const [name, setName] = useState('');
  const [description,setDescription] = useState('');
  const [notes,setNotes] = useState('');
  
  console.log("AddTask::props: "+JSON.stringify(props));

  const handleAddPart = (part) => {
    console.log("AddTask::handleAddPart::part: " + JSON.stringify(part))
  }

  const onSaveTask = (e) => {
    let test=0;
    e.preventDefault();
    console.log("AddTask::onSaveTask:Task: " + id + ', '+name+' '+description+' ' +notes)
    props.saveTask({id:id,name:name,description:description,notes:notes});

  }

  return (
    <Grid container spacing={0} className={classes.gridBorder} >

      <Grid item className={classes.gridBorder + ' ' + classes.taskActive} xs={8}>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Active" />
        </FormGroup>
      </Grid>

      <Grid item className={classes.gridBorder} xs={8} >
        <TextField className={classes.taskName} variant="outlined" placeholder="Task Name" onChange={(e)=>{setName(e.target.value)}}/>
      </Grid>
      <Grid item className={classes.gridBorder} xs={8} >
        <TextField multiline variant="outlined" maxRows={4} minRows={4} className={classes.taskDescription} placeholder="Task Description" onChange={(e)=>{setDescription(e.target.value)}}></TextField>
      </Grid>

      <Grid item xs={8} className={classes.gridBorder}>
        Notes
      </Grid>

      <Grid item className={classes.gridBorder} xs={8}>
        <TextField multiline variant="outlined" minRows={8} className={classes.taskNotes} placeholder="Notes" onChange={(e)=>{setNotes(e.target.value)}}></TextField>
      </Grid>

      <Grid item xs={8} className={classes.gridBorder}>
        Part List
      </Grid>

      <Grid item xs={12} className={classes.gridBorder + ' ' + classes.taskPartList}>
        <PartListPanel parts={projectParts} activeProject={activeProject} addPart={handleAddPart}/>
      </Grid>
      <Grid item xs={4} className={classes.gridBorder + ' ' + classes.saveButtons}>
        <Button variant="contained" color="primary" onClick = {onSaveTask}>Save Task</Button>
      </Grid>
      <Grid item xs={4} className={classes.gridBorder + ' ' + classes.saveButtons}>
        <Button variant="contained" color="primary">Clear</Button>
      </Grid>
    </Grid>
  );

}


AddTask.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  activeProject: PropTypes.object.isRequired,
  saveTask: PropTypes.func.isRequired
};

export default withStyles(styles)(AddTask);
