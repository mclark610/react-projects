import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { ListItemAvatar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { PropTypes } from 'prop-types';
import { Avatar, ListItemText } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

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
 * @function
 * @description  Display list item and handles event.
 * @param
 */

const TaskListItem = (props) => {

  const navigate = useNavigate();

  console.log("TaskListItem::Props: " + JSON.stringify(props))

  const onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("TaskListItem::onDblClick:doubleclick called! ")
    console.log("TaskListItem::onDblClick:current taskId: " + props.currentTask.id)

    // Go to task detail
    navigate(`/task/${props.currentTask.id}`, props.currentTask.id)
  }

  const task = props.currentTask
  console.log("TaskListItem:render:task: " + JSON.stringify(task))
  return (
    <ListItem key={task.id} alignItems="flex-start" onDoubleClick={onDblClick} button className={styles.taskItemButton} >
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
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="textPrimary"
            >
              {task.description ? task.description : ''}
            </Typography>
        }
      >
        {task.name}
      </ListItemText>
    </ListItem>
  )
}


TaskListItem.propTypes = {
  currentTask: PropTypes.object.isRequired,
  activeProject: PropTypes.object.isRequired
}

export default TaskListItem;
