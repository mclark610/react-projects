import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import { Paper } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { Grid, List, Box } from '@material-ui/core';
import TaskListItem from './TaskListItem';

const styles = theme => ({
  taskList: {
    width: "100%",
    paddingTop: "20px",
    marginBottom: "4px",
    paddingLeft: "20px",
    paddingRight: "20px",
    textAlign: "left",
  },
  searchTaskList: {

    width: "80%",
    paddingTop: "20px",
    marginBottom: "4px",
    marginLeft: "20px",

    textAlign: "left",
  }

});

class TaskList extends Component {

  state = {
    searchFor: '',
  }

  componentDidMount() {
  }

  render() {
    const { classes, tasks } = this.props;

    console.log("************** TaskList::render::return")
    console.log("tasks : " + JSON.stringify(tasks))
    this.props.tasks.map((currentTask, index) => (
      console.log("currentTask: " + JSON.stringify(currentTask))
    ))

    return (
      tasks && tasks.length ? (
        <div>
          <Grid item xs={4} className={classes.searchTaskList}>
            <TextField
              id="searchTaskList"
              placeholder="Task"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
          </Grid>
          <Grid item className={classes.taskList}>

            <Box width="100%" sx={{ border: '2px solid blue' }}>
              <List>
                {tasks.map((currentTask, index) => (
                  <TaskListItem key={index}
                    currentTask={currentTask} />
                ))}
              </List>
            </Box>
          </Grid>
        </div>
      )
        :
        (
          <Grid container>
            {console.log("???????????? TaskList::render::return 2")}
            <Paper elevation={1} className={classes.container}>
              {this.state.loginStatus}<br />
            </Paper>
          </Grid>
        )
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array
}

export default withStyles(styles)(TaskList);
