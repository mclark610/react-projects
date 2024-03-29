import React, { Component } from "react";
import TextField from "@mui/material/TextField";

import { PropTypes } from "prop-types";
import { Grid, List, Box, ListItem, Typography } from "@mui/material";
import TaskListItem from "./TaskListItem";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const styles = () => ({
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
  },
  debugBox: {
    border: "2px solid green",
  },
  taskListActions: {
    border: "1px solid black",
    margin: "0",
    flex: "1",
    display: "inline-flex",
    marginRight: "5%",
    position: "relative",
    minWidth: "0",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

/**
 * @component TaskList
 * @description  list of tasks
 * It also has a search feature. *take out
 * @param {object} tasks  required
 * @param {object} classes styles
 * @todo Separate search box from task list. create broader class to
 *       display
 */

class TaskList extends Component {
  state = {
    searchFor: "",
  };

  handleAddPart = () => {
    // Go to TaskDetail
    this.props.navigation.navigate({
      pathname: `/addtask`,
    });
  };

  render() {
    const { classes, tasks } = this.props;

    console.log("---------------------------------------------------");
    console.log("TaskList::tasks : " + JSON.stringify(tasks));
    console.log("TaskList::props: " + JSON.stringify(this.props));

    /*
        this.props.tasks.map((currentTask, index) => (
          console.log("TaskList::currentTask[" + index + "]: "+ JSON.stringify(currentTask))
        ))
    */
    return (
      <div>
        <Grid
          item
          xs={5}
          sx={{
            width: "80%",
            paddingTop: "20px",
            marginBottom: "4px",
            marginLeft: "20px",
          }}
        >
          <TextField
            id="searchTaskList"
            placeholder="Task"
            margin="normal"
            onChange={this.onSearchInputChange}
          />
        </Grid>
        <Grid
          item
          sx={{
            width: "100%",
            paddingTop: "20px",
            marginBottom: "4px",
            paddingLeft: "20px",
            paddingRight: "20px",
            textAlign: "left",
          }}
        >
          <Box width="100%" sx={{ border: "2px solid green" }}>
            {tasks && tasks.length ? (
              <List>
                {this.props.tasks.map((currentTask, index) => (
                  <TaskListItem
                    key={index}
                    currentTask={currentTask}
                    activeProject={this.props.activeProject}
                  />
                ))}
              </List>
            ) : (
              <List>
                <ListItem>
                  <Typography>No Tasks in List</Typography>
                </ListItem>
              </List>
            )}
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            border: "1px solid black",
            margin: "0",
            flex: "1",
            display: "inline-flex",
            marginRight: "5%",
            position: "relative",
            minWidth: "0",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
          xs={8}
        >
          <Box>
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={this.handleAddPart} />
            </Fab>
            <Fab disabled aria-label="delete">
              <DeleteIcon />
            </Fab>
          </Box>
        </Grid>
      </div>
    );
  }
}

TaskList.propTypes = {
  activeProject: PropTypes.object.isRequired,
  tasks: PropTypes.array,
};

export default TaskList;
