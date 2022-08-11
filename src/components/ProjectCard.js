import React, { Component } from 'react'
import Card from '@mui/material/Card'

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { Avatar } from '@mui/material'
import { withRouter } from 'react-router-dom'

class ProjectCard extends Component {
  state = {
    open: false,
    selectedValue: false
  }

  onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("ProjectCard::onDblClick::doubleclick called! ")
    console.log("current projectid: " + this.props.currentProject.id)
    // Go to ProjectDetail
    this.props.history.push({
      pathname: `/project/${this.props.currentProject.id}`,
      currentProject: this.props.currentProject
    })
  }
  componentDidMount() {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log("ProjectCard::componentDidMount:Props: " + JSON.stringify(this.props))
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
  }

  render() {
    const project = this.props.currentProject
    console.log("ProjectCard:render:project: " + JSON.stringify(project))
    return (
      <Card onDoubleClick={this.onDblClick} component="div">
        <CardContent>
          {
            project && (project.avatarURL ? <Avatar src={project.avatarURL} /> : null)
          }
          <Typography component="div" gutterBottom>
            {project.name}
          </Typography>
          <Typography component="div">
            {project.description ? project.description : ''}
          </Typography>
          <Typography component="div">
            {project.part_nbr ? project.part_nbr : ''}
          </Typography>
          <Typography component="div">
            {project.status ? project.status : ''}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withRouter(ProjectCard);
