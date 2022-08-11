import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Grid, FormGroup, FormControlLabel, Switch } from '@mui/material';
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

class TaskDetail extends React.Component {

  componentDidMount() {
    console.log("TaskDetail::componentDidMount:props: " + JSON.stringify(this.props));
  }

  render() {
    const { classes, parts,activeProject } = this.props;
    return (
      <Grid container spacing={0} className={styles.gridBorder} >

        <Grid item className={styles.gridBorder + ' ' + styles.taskActive} xs={8}>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Active" />
          </FormGroup>
        </Grid>

        <Grid item className={styles.gridBorder} xs={8} >
          <TextField className={styles.taskName} variant="outlined" placeholder="Task Name" />
        </Grid>
        <Grid item className={styles.gridBorder} xs={8} >
          <TextField multiline variant="outlined" maxRows={4} minRows={4} className={styles.taskDescription} placeholder="Task Description"></TextField>
        </Grid>

        <Grid item xs={8} className={styles.gridBorder}>
          Notes
        </Grid>

        <Grid item className={styles.gridBorder} xs={8}>
          <TextField multiline variant="outlined" minRows={8} className={styles.taskNotes} placeholder="Notes"></TextField>
        </Grid>

        <Grid item xs={8} className={styles.gridBorder}>
          Part List
        </Grid>

        <Grid item xs={12} className={styles.gridBorder + ' ' + styles.taskPartList}>
          <PartList parts={parts} activeProject={activeProject}/>
        </Grid>
      </Grid>
    );
  }
}

TaskDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
};

export default TaskDetail;
