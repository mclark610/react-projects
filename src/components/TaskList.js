import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { List, Box } from '@material-ui/core';
import TaskListItem from './TaskListItem';

const styles = theme => ({
  container: {
    height: "80%",
    width: "80%",
    margin: "1rem",
    textAlign: 'center',
    display: 'inline-block',

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
        <Fragment>
        {console.log("inside fragment")}
          <TextField style={{ padding: 22 }}
            id="searchInput"
            placeholder="Search for Task"
            margin="normal"
            onChange={this.onSearchInputChange}
          />

          <Box width="100%" sx={{ border: '2px solid blue' }}>
            <List>
              {tasks.map((currentTask, index) => (
                <TaskListItem key={index}
                  currentTask={currentTask} />
              ))}
            </List>
          </Box>
        </Fragment>
      )
        :
        (
          <Container maxWidth="lg">
            {console.log("???????????? TaskList::render::return 2")}
            <Paper elevation={1} className={classes.container}>
              {this.state.loginStatus}<br />
            </Paper>
          </Container>
        )
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array
}

export default withStyles(styles)(TaskList);
