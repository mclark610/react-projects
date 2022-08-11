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
class ProjectListItem extends Component {
  state = {
    open: false,
    selectedValue: false
  }

  onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("ProjectListItem::onDblClick::doubleclick called! ")
    console.log("current projectid: " + this.props.currentProject.id)
    // Go to ProjectDetail
    this.props.history.push({
      pathname: `/project/${this.props.currentProject.id}`,
      currentProject: this.props.currentProject
    })
  }
  componentDidMount() {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log("ProjectListItem::componentDidMount:Props: " + JSON.stringify(this.props))
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
  }

  render() {
    const project = this.props.currentProject
    console.log("ProjectListItem:render:project: " + JSON.stringify(project))
    return (
      <ListItem key={this.props.key} alignItems="flex-start" onDoubleClick={this.onDblClick}  button sx={{color: '#F0A',minWidth: '100%', maxWidth:'100px'}}
      sx={{
          '&:hover': {
            background: "#f00",
          },
          width:"500",
      }}

        key={project.id}
      >
        
          {
            project && (project.avatarURL ? 
                <ListItemAvatar>
                  <Avatar src={project.avatarURL} />
                </ListItemAvatar>
              : 
                null)
          }

        <ListItemText
          primary={project.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {project.description ? project.description : ''}
              </Typography>
            </React.Fragment>
          }
        >
          {project.name}
        </ListItemText>
      </ListItem>
    )
  }
}

export default withRouter(ProjectListItem);
