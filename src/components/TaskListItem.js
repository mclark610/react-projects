import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import {ListItemAvatar} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import { Avatar, ListItemText } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  tr: {
    background: "#f1f1f1",
    '&:hover': {
       background: "#f00",
    },
  },
});
class TaskListItem extends Component {
  state = {
    open: false,
    selectedValue: false
  }

  onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("TaskListItem::onDblClick::doubleclick called! ")
    console.log("current taskId: " + this.props.currentTask.id)
    // Go to TaskDetail
    this.props.history.push({
      pathname: `/task/${this.props.currentTask.id}`,
      currentTask: this.props.currentTask
    })
  }
  componentDidMount() {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log("TaskListItem::componentDidMount:Props: " + JSON.stringify(this.props.currentTask))
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

  }

  render() {
    const task = this.props.currentTask
    console.log("TaskListItem:render:task: " + JSON.stringify(task))
    return (
      <ListItem key={this.props.key} alignItems="flex-start" onDoubleClick={this.onDblClick}  button sx={{color: '#F0A',minWidth: '100%', maxWidth:'100px'}}
      sx={{
          '&:hover': {
            background: "#f00",
          },
          width:"500",
      }}

        key={task.id}
      >
        
          {
            task && (task.avatarURL ? 
                <ListItemAvatar>
                  <Avatar src={task.avatarURL} />
                </ListItemAvatar>
              : 
                null)
          }

        <ListItemText
          primary={task.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {task.description ? task.description : ''}
              </Typography>
            </React.Fragment>
          }
        >
          {task.name}
        </ListItemText>
      </ListItem>
    )
  }
}

export default withRouter(TaskListItem);
