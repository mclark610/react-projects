import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import {List,Box} from '@material-ui/core';
import TodoListItem from './TodoListItem';

const styles = theme => ({
  container: {
    height: "80%",
    width: "80%",
    margin: "1rem",
    textAlign: 'center',
    display: 'inline-block',

  }
});

class TodoList extends Component {

  state = {
    searchFor: '',
  }

  componentDidMount() {
  }

  render() {
    const { classes, todos,tasks } = this.props;

    return(
    todos && todos.length ? (
      <Fragment>
      <TextField style={{ padding: 22 }}
        id="searchInput"
        placeholder="Todo"
        margin="normal"
        onChange={this.onSearchInputChange}
      />
      {console.log("************** TodoList::render::return ")}
      <Box width="100%" sx={{ border: '2px solid blue'}}>
      <List>

        {this.props.todos.map((currentTodo,index) => (
            <TodoListItem  key={index}      
              currentTodo={tasks[currentTodo.taskId]}
            />
        ))}
        </List>
        </Box>
      </Fragment>
    )
    :
    (
      <Container maxWidth="lg">
      {console.log("???????????? TodoList::render::return 2")}
      <Paper elevation={1} className={classes.container}>
        {this.state.loginStatus}<br />
      </Paper>
      </Container>
    )
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array
}

export default withStyles(styles)(TodoList);
