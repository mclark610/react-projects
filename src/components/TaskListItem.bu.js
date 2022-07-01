import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { ListItemAvatar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { PropTypes } from 'prop-types';
import { Avatar, ListItemText } from '@material-ui/core'

const styles = theme => ({
  tr: {
    background: "#f1f1f1",
    '&:hover': {
      background: "#f00",
    },
  },
  taskItemButton: {
    color: '#F0A', 
    minWidth: '100%', 
    maxWidth: '100px'
  }
});

/**
 * @component
 * @description  Display list item and handles event.
 * @param
 */

class TaskListItem extends Component {
  state = {
    open: false,
    selectedValue: false
  }

  onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("TaskListItem::onDblClick:doubleclick called! ")
    console.log("TaskListItem::onDblClick:current taskId: " + this.props.currentTask.id)

    // Go to TaskDetail
    this.props.history.push({
      pathname: `/task/${this.props.currentTask.id}`,
      currentTask: this.props.currentTask
    })
  }
  
  componentDidMount() {
    console.log("TaskListItem::componentDidMount:Props: " + JSON.stringify(this.props))

  }

  render() {
    const task = this.props.currentTask
    console.log("TaskListItem:render:task: " + JSON.stringify(task))
    return (
      <ListItem key={task.id} alignItems="flex-start" onDoubleClick={this.onDblClick} button className={styles.taskItemButton} >
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

TaskListItem.propTypes = {
  currentTask: PropTypes.object.isRequired,
  activeProject: PropTypes.object.isRequired
}

export default TaskListItem;
