import React, { Component } from 'react'
import ListItem from '@mui/material/ListItem'
import {ListItemAvatar} from '@mui/material'
import Typography from '@mui/material/Typography'

import { Avatar, ListItemText } from '@mui/material'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  tr: {
    background: "#f1f1f1",
    '&:hover': {
       background: "#f00",
    },
  },
});
class TodoListItem extends Component {
  state = {
    open: false,
    selectedValue: false
  }

  onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("TodoListItem::onDblClick::doubleclick called! ")
    console.log("current todoId: " + this.props.currentTodo.id)
    // Go to TodoDetail
    this.props.history.push({
      pathname: `/todo/${this.props.currentTodo.id}`,
      currentTodo: this.props.currentTodo
    })
  }
  componentDidMount() {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log("TodoListItem::componentDidMount:Props: " + JSON.stringify(this.props))
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
  }

  render() {
    const todo = this.props.currentTodo
    const tasks = this.props.tasks
    console.log("TodoListItem:render:todo: " + JSON.stringify(todo))
    return (
      <ListItem key={this.props.key} alignItems="flex-start" onDoubleClick={this.onDblClick}  button sx={{color: '#F0A',minWidth: '100%', maxWidth:'100px'}}
      sx={{
          '&:hover': {
            background: "#f00",
          },
          width:"500",
      }}

        key={todo.id}
      >
        
          {
            todo && (todo.avatarURL ? 
                <ListItemAvatar>
                  <Avatar src={todo.avatarURL} />
                </ListItemAvatar>
              : 
                null)
          }

        <ListItemText
          primary={todo.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {todo.description ? todo.description : ''}
              </Typography>
            </React.Fragment>
          }
        >
          {todo.name}
        </ListItemText>
      </ListItem>
    )
  }
}

export default withRouter(TodoListItem);
